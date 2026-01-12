import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react'

function Take_a_loan() {
  return (
    <div className=''>
      {/* w-[1400px] mx-auto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-0">
        <div style={{backgroundImage: "url('/assets/take_a_loan.png')"}} className='bg-no-repeat bg-center bg-cover'>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-10">
                {/* 1st */}
                <div className='bg-white py-[1.667vw] px-[1.667vw] rounded-[18px] bg-white/90 backdrop-blur-[30px]'>
                    <h1 className="font-['GreatVibes'] font-regular text-[32px]">Support for</h1>
                    <div className='flex items-center justify-center gap-[0.417vw] pt-[2.708vw]'>
                      <div className='w-[90px] h-[90px] relative'>
                        <Image src="/assets/BTC.png" alt="BTC"  fill className='object-contain' />
                      </div>
                      <h1 className="font-['InterTight'] font-medium text-[32px]">BTC</h1>
                    </div>
                </div>
                {/* 1st END */}
                {/* 2nd */}
                <div className='bg-white py-[1.667vw] px-[1.667vw] rounded-[18px] bg-white/90 backdrop-blur-[30px] space-y-[0.99vw]'>
                    <h1 className="font-['GreatVibes'] font-regular text-[32px]">No Rehypothecation</h1>
                    <div className="w-[60px] h-[60px] relative">
                      <Image src="/assets/lock.png" alt="lock" fill />
                    </div>
                    <p className="font-['InterTight'] font-regular text-[18px]">Your collateral is stored securely in qualified custody</p>
                </div>
                {/* 2nd END */}
                {/* 3rd */}
                <div className='bg-white py-[1.667vw] px-[1.667vw] rounded-[18px] bg-white/90 backdrop-blur-[30px] space-y-[0.99vw]'>
                    <h1 className="font-['GreatVibes'] font-regular text-[32px]">Fixed</h1>
                    <div className="flex gap-[0.938vw] items-end">
                      <p className="font-['InterTight'] font-semibold text-[48px]">10%*</p>
                      <p className="font-['InterTight'] font-regular text-[18px]">Interest Rate*</p>
                    </div>
                    <p className="font-['InterTight'] font-regular text-[18px]">“+1.5% origination fee”</p>
                </div>
                {/* 3rd END */}
                {/* 4th */}
                <div className='bg-white py-[1.667vw] px-[1.667vw] rounded-[18px] bg-white/90 backdrop-blur-[30px] space-y-[0.99vw]'>
                    <h1 className="font-['GreatVibes'] font-regular text-[32px]">No credit check required</h1>
                    <div className="w-[84px] h-[84px] relative">
                      <Image src="/assets/tick.png" alt="lock" fill />
                    </div>
                    <p className="font-['InterTight'] font-regular text-[18px]">Qualify instantly</p>
                </div>
                {/* 4th END */}
              </div>
        </div>
        {/* Right side */}
        {/* <div> */}
          <div className='flex flex-col bg-black text-white p-[6.25vw] space-y-[1.667vw]'>
            <h1 className="font-['GreatVibes'] font-regular text-[60px] lg:text-[120px] leading-10 lg:leading-23">Take<span className="font-['InterTight'] font-semibold text-[36px] lg:text-[72px]"><br />a Loan</span></h1>
            <p>At Nomacal, we keep it simple-no credit checks and no piles of paperwork. Just straightforward, hassle-free lending.</p>
             <div className='flex gap-3'>
              <Button text="Get loan now" backgroundcolor="bg-[#FFD700]" textColor="text-black" />
              <Button text="Login / Sign up" backgroundcolor="bg-[#FFFFFF]" textColor="text-black" />
            </div>
          </div>

        {/* </div> */}
      </div>
    </div>
  )
}

export default Take_a_loan;