interface Props {
    id: string;
    title: string;
    body: string;
    bullets?: string[];
}

export default function PrivacyCard({ id, title, body, bullets }: Props) {
    return (
        <div className='flex flex-row gap-x-4 bg-primary-100 p-10 rounded-[0.625rem] overflow-hidden'>
            <div className='text-[3.125rem] text-gray-400 mt-2 mr-4'>{Number(id) < 10 ? `0${id}` : id}</div>

            <div className='flex flex-col gap-y-4 mr-10'>
                <div className='text-2xl'>{title}</div>
                <div className='text-gray-500'>{body}</div>

                {bullets && (
                    <div className="text-gray-500">
                        <ul className="list-disc">
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