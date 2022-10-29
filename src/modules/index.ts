/* eslint-disable no-console */
import { getAuth, signOut } from 'firebase/auth';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'init_firebase';
import { MailtrapClient } from 'mailtrap';

import { MAIL_ENDPOINT, MAIL_TOKEN } from '@/constant/env';

const auth = getAuth();

export const getStudents = async (paid: boolean) => {
  const q = query(collection(db, 'users'), where('paid', '==', paid));

  const querySnapshot = await getDocs(q);
  const users: object[] = [];
  querySnapshot.forEach((doc) => users.push(doc.data()));

  return users;
};

export const getUsers = async () => {
  const users: any[] = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    user.id = doc.id;
    users.push(user);
  });

  return users;
};

export const getChat = async (id: string) => {
  const user = await getUsers();
  const selected_user = await user.find((u) => u.uid === id);
  let chat_id = selected_user?.chat_id;

  if (!selected_user?.chat_id) {
    try {
      const userRef = doc(db, 'users', selected_user?.id);

      const data = {
        created_at: new Date(),
        chat: [],
        user: selected_user?.full_name,
      };

      try {
        const docRef = await addDoc(collection(db, 'chats'), data);
        chat_id = docRef.id;
      } catch (e: any) {
        console.log(e);
      }

      await updateDoc(userRef, {
        chat_id,
      });
    } catch (e: any) {
      console.log(e);
    }
  }

  return chat_id;
};

export const fetchChat = async (id: string) => {
  let chat_data: any;

  await onSnapshot(doc(db, 'chats', id), (doc) => {
    console.log('Current data: ', doc.data());
    chat_data = doc.data();
  });

  return chat_data;
};

export const sendMessage = async (id: string, text: string) => {
  const data = {
    message: text,
    from: 'user',
    sent: new Date(),
  };
  const chatRef = doc(db, 'chats', id);

  await updateDoc(chatRef, {
    chat: arrayUnion(data),
  });
};

export const logOut = async () => {
  let status;
  await signOut(auth).then(() => {
    // Sign-out successful.
    status = 'Success';
  });

  return status;
};

export const sendTransactionalMail = async (
  recipient: string,
  amount: number,
  name: string,
  ref: string,
) => {
  const client = new MailtrapClient({
    endpoint: MAIL_ENDPOINT,
    token: MAIL_TOKEN,
  });

  const sender = {
    email: 'training@devrecruitschool.com',
    name: 'Devrecruit Training',
  };
  const recipients = [
    {
      email: recipient,
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: `Payment Confirmation & Registration`,
      text: `
      Dear ${name}
      
      Your Registration Payment for Cyber security Introductory Course has been received and confirmed for processing.
      
      Kindly find below the link to complete your Registration on the Learning Management System.
      
       *Link*____________
      

       Payment Reference: ${ref}

      Regards
      
      (*Community Manager*)
      DevRecruit Training School.
      `,
      category: 'Payment Confirmation & Registration',
    })
    .then((response) => {
      console.log(response)
      // return response
    })
    .catch((err) => {
      console.error(err)
      // return err;
    });
};
