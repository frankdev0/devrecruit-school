/* eslint-disable @next/next/no-img-element */
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from 'init_firebase';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Rings } from 'react-loader-spinner';

import Button from '@/components/buttons/Button';

import { getChat, getStudents, sendMessage } from '@/modules';

export default function ChatComponent({user_data}: any) {
  const chatId = useRef(user_data.chat_id);
  const [chats, setChats] = useState<[]>([]);
  const [userName, setUserName] = useState(user_data.full_name);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleChat = async (id: string) => {
    setLoading(true);

    const res = await getChat(id);
    chatId.current = res;

    if (res) {
      setLoading(false);
      onSnapshot(doc(db, 'chats', res), (doc) => {
        const response = doc?.data();

        setChats(response?.chat);
        setUserName(response?.user);
      });

      setSession(true);
    }
  };

  const handleInput = (text: string) => {
    setUserInput(text);
  };

  const handleSend = () => {
    sendMessage(chatId.current, userInput);
    setUserInput('');
  };


  useEffect(() => {
    setLoading(true);

    console.log(chatId.current);
    
    if (chatId.current) {
      setLoading(false);
      onSnapshot(doc(db, 'chats', chatId.current), (doc) => {
        const response = doc?.data();

        setChats(response?.chat ? response?.chat : []);
        setSession(true);
      });
    } else {
        handleChat(user_data.uid)
    }
  }, [user_data.uid]);

  return (
    <div className='flex h-[36rem] flex-row gap-x-10'>
      <div className='relative flex w-full flex-col overflow-hidden rounded-[0.625rem] border-[0.5px] border-[#4F4F4F] bg-[#F8FFFE]'>
        {/* Header Section */}
        {session && (
          <div className='absolute top-0 z-20 flex h-[4.6875rem] w-full flex-row gap-x-[0.875rem] bg-primary px-12 py-3'>
            <div className='my-auto'>
              <img
                className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                src='/images/user.png'
                alt=''
              />
            </div>

            <div className='my-auto'>Sember Adekaa</div>
          </div>
        )}

        <div className='my-auto flex h-[70%] flex-col overflow-scroll py-10 px-[2.8125rem]'>
          <div className='z-10 my-auto flex flex-col gap-y-10'>
            {loading && (
              <div className='m-auto'>
                <Rings
                  height='120'
                  width='120'
                  color='#86C9C0'
                  radius='6'
                  wrapperClass=''
                  visible={true}
                  ariaLabel='rings-loading'
                />
              </div>
            )}

            {!loading &&
              session &&
              chats.length > 0 &&
              chats.map((chat: any, i) => {
                if (chat?.from === 'admin') {
                  const toDate = chat.sent.toDate().toString();
                  const time = moment(toDate).fromNow();

                  return (
                    <div
                      key={i}
                      className='relative flex min-h-[3.75rem] w-2/3 rounded-tr-3xl rounded-bl-3xl bg-[#E5EBEA] py-2 px-3'
                    >
                      <div className='my-auto px-4'>{chat.message}</div>

                      <div className='absolute bottom-0 right-0 p-2 text-xs font-light text-[#4F4F4F]'>
                        {time}
                      </div>
                    </div>
                  );
                } else {
                  const toDate = chat.sent.toDate().toString();
                  const time = moment(toDate).fromNow();

                  return (
                    <div
                      key={i}
                      className='relative ml-auto flex min-h-[3.75rem] w-2/3 rounded-tr-3xl rounded-bl-3xl bg-[#E5EBEA] py-2 px-3'
                    >
                      <div className='my-auto px-4'>{chat.message}</div>

                      <div className='absolute bottom-0 right-0 p-2 text-xs font-light text-[#4F4F4F]'>
                        {time}
                      </div>
                    </div>
                  );
                }
              })}

            {!loading && !session && chats.length === 0 && (
              <div className='m-auto text-center font-light text-gray-400'>
                No Chat Selected.
              </div>
            )}

            {!loading && session && chats.length === 0 && (
              <div className='m-auto text-center font-light text-gray-400'>
                Send a message to us.
              </div>
            )}
          </div>
        </div>

        {/* Input Section */}
        <div className='absolute bottom-0 z-20 mt-20 flex w-full flex-row gap-x-5 p-4'>
          <div className='w-full'>
            <input
              type='text'
              value={userInput}
              onChange={(e) => handleInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
              className='h-[4.375rem] w-full rounded-[0.625rem] border border-[#4F4F4F] p-4 ring-[0.5px] ring-primary-300 md:ring-primary-500'
              placeholder='Type something...'
            />
          </div>

          <div>
            <Button
              onClick={handleSend}
              disabled={!session}
              className='flex h-[4.375rem] w-[7.5rem]'
            >
              <div className='m-auto'>Send</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
