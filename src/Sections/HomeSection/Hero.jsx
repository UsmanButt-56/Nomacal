'use client';
import React from 'react'
import Image from 'next/image';
import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';
import NavbarWrapper from '@/components/navbar/NavbarWrapper';
function Hero() {
  const router = useRouter();
  const movetoloan = () => {
    router.push('/get-loan-now');
  }
  return (
    <div className=''>
      <div className='max-w-[1400px] h-full w-full mx-auto px-4 md:px-10 flex flex-col lg:flex-row pt-[7.187vw] lg:gap-10'>
        <div className='w-full flex-1'>
          <div className='pb-[4.167vw]'>
            <h1 className="font-['GreatVibes'] font-normal text-[42px] sm:text-[56px] md:text-[64px] lg:text-[72px] leading-[100%] tracking-[1.12px] w-[230px] border-b-1">Nomacal</h1>
            <h5 className="font-['Inter_Tight'] font-normal text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[100%] md:text-left py-4">Hodl and Live-No Margin Calls, No Compromises.</h5>
            <h6 className="font-['Inter_Tight'] font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[38px] md:text-left py-3">Nomacal lets you unlock the value of your Bitcoin
              without giving it up. Through a secure multisig setup,
              (more custody options coming soon). With fixed-rate loans,
              fast access to cash, and zero margin calls, you can finally
              borrow with confidence, hodl with conviction, and live freely
              at the same time.</h6>
            <div className='flex gap-3'>
              <Button text="Get loan now" backgroundcolor="bg-[#FFD700]" textColor="text-black" onClick={movetoloan} />
              <Button text="Sign Up" backgroundcolor="bg-[#FFFFFF]" textColor="text-black" />
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-1 flex items-center justify-center mt-10 lg:mt-0 relative">

          <div className="w-[280px] sm:w-[330px] md:w-[380px] lg:w-full h-auto relative">
            <Image
              src="/assets/mobile-phone.png"
              alt="mobile"
              width={500}
              height={500}
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero;