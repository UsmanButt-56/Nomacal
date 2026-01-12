import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react'

function InsightHero() {
    return (
        <div className='bg-white'>
            <div className='max-w-[1400px] h-full w-full mx-auto px-4 md:px-10 flex flex-col lg:flex-row pt-[7.187vw] lg:gap-10 pb-[6.25vw]'>
                <div className='w-full lg:flex-1'>
                    <div className=' flex flex-col space-y-[1.667vw]'>
                        <h1 className="pt-0 font-['InterTight'] font-regular text-[32px] sm:text-[56px] md:text-[64px] lg:text-[72px] lg:leading-[100%] lg:tracking-[1.12px] text-start">Nomacal,<br /><span className='font-semibold'>Simplifying-life</span></h1>
                        <p className="font-['InterTight'] font-regular text-[12px] sm:text-[18px] md:text-[20px] lg:text-[24px] lg:leading-[38px] md:text-left">
                            By removing the anxiety of uncertainty. Nomacal lets people access what they need today without sacrificing their potential. In a world full of financial pressure and confusion, it offers clarity, control, and the quiet confidence that comes from knowing the rules won't change halfway through the game.
                        </p>
                        <div className='flex gap-3'>
                            <Button text="Get loan now" backgroundcolor="bg-[#FFD700]" textColor="text-black" />
                            <Button text="LogIn / Sign Up" backgroundcolor="bg-[#E7E7E7]" textColor="text-black" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:flex-1 flex items-center justify-center mt-0 lg:mt-0 relative">

                    <div className="w-[25vw] h-[25vw] relative">
                        <Image
                            src="/assets/Bitcoins.png"
                            alt="mobile"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InsightHero;