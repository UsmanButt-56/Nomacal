import Button from '@/components/button/Button';
import NavbarWrapper from '@/components/navbar/NavbarWrapper';
import Image from 'next/image';
import React from 'react'

function BlogHero() {
    return (
        <div className=''>
            <div className='max-w-[1400px] h-full w-full mx-auto px-4 md:px-10 flex flex-col lg:flex-row pt-[7.187vw] lg:gap-10'>
                <div className='w-full flex-1'>
                    <div className='pb-[4.167vw]'>
                        <h1 className="pt-0 font-['GreatVibes'] font-normal text-[32px] sm:text-[56px] md:text-[64px] lg:text-[72px] lg:leading-[100%] lg:tracking-[1.12px] w-[230px] border-b-1 text-start">Nomacal</h1>
                        <p className="font-['Inter_Tight'] font-normal text-[14px] sm:text-[24px] md:text-[28px] lg:text-[32px] lg:leading-[100%] md:text-left py-0 lg:py-4">The world’s leading destination for secure financing against your bitcoin</p>
                        <p className="font-['Inter_Tight'] font-regular text-[12px] sm:text-[18px] md:text-[20px] lg:text-[24px] lg:leading-[38px] md:text-left lg:py-3">
                            Lorem ipsum dolor sit amet consectetur. Vitae arcu dictumst risus augue metus a pellentesque. Netus non accumsan elit pulvinar quam risus. 
                            Tristique lacus pulvinar neque quis urna enim pretium. Amet leo vitae sapien eget libero donec condimentum. Nulla feugiat leo cursus viverra. Nisi molestie blandit et ut ultrices purus arcu.
                        </p>
                        <div className='flex gap-3'>
                            <Button text="Get loan now" backgroundcolor="bg-[#FFD700]" textColor="text-black" />
                            <Button text="Sign Up" backgroundcolor="bg-[#FFFFFF]" textColor="text-black" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:flex-1 flex items-center justify-center mt-0 lg:mt-0 relative">

                    <div className="w-[280px] sm:w-[330px] md:w-[380px] lg:w-full h-auto relative">
                        <Image
                            src="/assets/Bloghero.png"
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

export default BlogHero;