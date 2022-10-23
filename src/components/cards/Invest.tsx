import ButtonLink from '../links/ButtonLink';

export default function InvestCard() {
  return (
    <div className='layout relative mb-10'>
      <div className='mx-auto object-cover'>
        <picture>
          <source srcSet='/images/investing.jpg' type='image/png' />
          <img
            src='/images/investing.jpg'
            alt='Landscape picture'
            width='100%'
          />
        </picture>
      </div>

      <div className='absolute inset-x-0 top-0 flex w-full flex-row justify-between px-20 text-white lg:my-16 lg:px-60'>
        <div className='my-auto text-right text-2xl font-extrabold leading-[3.84rem] lg:text-4xl'>
          <div>It&apos;s Time to Start</div>
          <div>Investing in Your Dream</div>
        </div>

        <div className='mt-10 flex flex-col gap-y-6'>
          <div className='text-2xl'>
            <div>Begin your journey of a long career by</div>
            <div>acquiring expertise and technical</div>
            <div>knowledge to enter the IT sector.</div>
          </div>

          <div>
            <ButtonLink
              href='/register'
              className='rounded-[1.25rem] bg-white px-8 py-3 font-light text-black'
            >
              Enroll Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
