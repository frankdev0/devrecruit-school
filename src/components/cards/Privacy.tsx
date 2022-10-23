interface Props {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
}

export default function PrivacyCard({ id, title, body, bullets }: Props) {
  return (
    <div className='flex flex-row gap-x-4 overflow-hidden rounded-[0.625rem] bg-primary-100 p-10'>
      <div className='mt-2 mr-4 text-[3.125rem] text-gray-400'>
        {Number(id) < 10 ? `0${id}` : id}
      </div>

      <div className='mr-10 flex flex-col gap-y-4'>
        <div className='text-2xl'>{title}</div>
        <div className='text-gray-500'>{body}</div>

        {bullets && (
          <div className='text-gray-500'>
            <ul className='list-disc'>
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
