import Image from 'next/image';
import React from 'react'

function Custody({image , bgColor}) {
  return (
    <div className={`w-full ${bgColor}`}>
    <div className='py-5 lg:py-20 max-w-[1400px] mx-auto  px-3 2xl:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-[65%_30%] gap-5 lg:gap-20'>
        <div className='flex flex-col gap-2 lg:gap-5'>
            <h1 className='font-[InterTight] font-semibold text-[26px] md:text-[32px] lg:text-[48px] lg:leading-14'>Collaborative custody prevents rehypothecation</h1>
            <p className='font-[InterTight] font-regular text-[12px] md:text-[14px] lg:text-[16px]'>Nomacal never rehypothecates your Bitcoin. While some lenders may reuse or re-leverage your collateral behind the scenes, we don't touch it. Your Bitcoin stays exactly where it should-locked securely and untouched for the duration of your loan. This not only preserves your ownership but ensures that your collateral isn't exposed to hidden risks or third-party failures.</p>
            <div className='bg-[#FFD700] font-semibold text-[16px] text-black w-[280px] flex items-center justify-center rounded-full py-3 md:py-4 lg:py-5'>
                <button>Terms & Conditions</button>
            </div>
        </div>
        <div>
            <Image src={image} width={496} height={419} alt="Custody"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Custody;