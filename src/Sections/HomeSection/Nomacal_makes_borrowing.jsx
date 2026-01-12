import React from 'react';
import Image from 'next/image';
import { termsborrowing } from '@/data/staticData';
function Nomacal_makes_borrowing() {
    return (   
        <div className='max-w-[1400px] mx-auto lg:my-20'>
            <div className='flex flex-col py-10'>
                <div className='flex flex-col gap-3 text-center items-center'>
                    <h1 className="lg:w-[874px] font-['InterTight'] font-semibold text-[18px] text-[32px] lg:text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[100%] text-center">Nomacal makes borrowing safe and reliable </h1>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 px-5'>
                    {/* 1st Block */}
                    {
                        termsborrowing.map((term, map) => (
                            <div className='bg-[#FFFFFF] p-5 lg:p-10 rounded-2xl' key={term.id}>
                                <Image src={term.icon} alt={term.label} width={24} height={24} />
                                <h1 className="font-['InterTight'] font-regular text-[18px] text-[#000000]">{term.label}</h1>
                                <p className="font-['InterTight'] font-light text-[16px] text-[#000000]">{term.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Nomacal_makes_borrowing;