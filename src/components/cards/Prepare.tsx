import React from "react";

import NextImage from "../NextImage";

export default function Prepare() {
    return <div className='layout my-20 flex flex-row justify-between px-20'>
        <div className='my-auto flex flex-col gap-y-4'>
            <div className='text-3xl'>Prepare Yourself For The Future</div>
            <div className='w-1/2 text-lg'>
                With the DevRecruit e-learning and coaching school, you can
                improve your abilities and prepare for that dream IT job.
            </div>
        </div>

        <div className='my-auto'>
            <NextImage src='/images/green_round.png' alt='' width={520} height={300} />
        </div>
    </div>;
}
