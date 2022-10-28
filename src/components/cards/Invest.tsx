import ButtonLink from '../links/ButtonLink';

export default function InvestCard() {
  return (
    <>
    {/* Desktop */}
    <div className='hidden lg:block layout relative mb-10 lg:rounded-none rounded-[0.625rem]'>
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

      <div className='absolute inset-x-0 top-0 flex w-full flex-col lg:flex-row justify-between px-10 text-white lg:my-16 lg:px-60'>
        <div className='my-auto text-center lg:text-right text-2xl font-header font-extrabold lg:leading-[3.84rem] lg:text-4xl'>
          <div>It&apos;s Time to Start</div>
          <div>Investing in Your Dream</div>
        </div>

        <div className='mt-5 lg:mt-10 flex flex-col gap-y-6'>
          <div className='text-center lg:text-left text-sm lg:text-2xl'>
            <div>Begin your journey of a long career by</div>
            <div>acquiring expertise and technical</div>
            <div>knowledge to enter the IT sector.</div>
          </div>

          <div className='mx-auto lg:mx-0'>
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

    {/* Mobile */}
    <div className='lg:hidden lg:layout relative mb-10 bg-black lg:bg-none h-[17rem] lg:rounded-none rounded-[0.625rem] lg:h-auto'>
      <div className='hidden mx-auto object-cover lg:flex'>
        <picture>
          <source srcSet='/images/investing.jpg' type='image/png' />
          <img
            src='/images/investing.jpg'
            alt='Landscape picture'
            width='100%'
          />
        </picture>
      </div>

      <div className='absolute inset-x-0 top-0 flex w-full flex-col lg:flex-row justify-between px-10 text-white lg:my-16 lg:px-60'>
        <div className='my-auto text-center mt-[1.875rem] lg:mt-0 lg:text-right text-2xl font-header font-extrabold lg:leading-[3.84rem] lg:text-4xl'>
          <div>It&apos;s Time to Start</div>
          <div>Investing in Your Dream</div>
        </div>

        <div className='mt-5 lg:mt-10 flex flex-col gap-y-6'>
          <div className='text-center lg:text-left text-sm lg:text-2xl'>
            <div>Begin your journey of a long career by</div>
            <div>acquiring expertise and technical</div>
            <div>knowledge to enter the IT sector.</div>
          </div>

          <div className='mx-auto lg:mx-0'>
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
    </>
  );
}
