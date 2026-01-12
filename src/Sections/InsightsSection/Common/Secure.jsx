import Image from 'next/image';
import React from 'react'

function Secure() {
  return (
    <div className='max-w-[1400px] mx-auto px-3 2xl:px-0'>
    <div className='grid grid-cols-1 md:grid-cols-[35%_60%] gap-1 md:gap-5 lg:gap-10 py-10 lg:py-20 w-full h-full items-center'>
      <div className='w-full flex items-center gap-2 lg:gap-5'>
          <div className='w-[60px] h-[60px] md:w-[120px] md:h-[120px] relative'>
            <Image src="/assets/fingerprint.png" fill alt="fingerprint" />
          </div>
            <p className='font-[InterTight] font-semibold text-[22px] lg:text-[48px]'>Secure</p>
      </div>
      <div className=''>
        <p className='font-[InterTight] font-regular text-[12px] lg:text-[16px]'>People feel completely secure interacting with Nomacal because we go beyond expectations—prioritizing full transparency, giving users complete control, and implementing top-tier security protocols. Their assets are protected with the same uncompromising principles and trustless technology that power Bitcoin itself, ensuring confidence at every step.</p>
      </div>
    </div>
    </div>
  )
}

export default Secure;