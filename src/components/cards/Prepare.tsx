/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Prepare() {
  return (
    <div className='layout my-20 flex flex-col lg:flex-row justify-between lg:px-20'>
      <div className='my-auto flex flex-col gap-y-4'>
        <div className='text-2xl lg:text-3xl font-header'>Prepare Yourself For The Future</div>
        <div className='lg:w-1/2 lg:text-lg'>
          With the DevRecruit e-learning and coaching school, you can improve
          your abilities and prepare for that dream IT job.
        </div>
      </div>

      <div className='my-auto mt-6 lg:mt-0'>
        <img src='/images/green_round.png' alt='' width={520} height={300} />
      </div>
    </div>
  );
}
