import Image from 'next/image';
import React from 'react';
import { NeverSell } from '../../data/staticData';
function Never_Sell() {
    return (
        <div className='bg-white'>
            <div className='max-w-[1400px] mx-auto px-5'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
                    <div className='flex flex-col space-y-7'>
                        <h1 className='font-[InterTight] font-semibold text-[#000000] text-[19px] lg:text-[72px]'>Never sell your Bitcoin, Live off it</h1>
                        <p className='font-[InterTight] font-regular text-[#000000] text-[14px] lg:text-[16px] opacity-50'>Never sell your Bitcoin-make it work for you instead. Every time you sell, you're not just giving up your position in the hardest asset on Earth-you're handing over your future for a short-term fix. With Nomacal, you can live off your Bitcoin without letting go of it.</p>
                        {
                            NeverSell.map((item) => (
                                <div className='flex items-start gap-3 lg:gap-5' key={item.id}>
                                    <Image src="/assets/tick.png" width={30} height={30} alt="tick" />
                                    <div className="flex flex-col">
                                    <p className='font-[InterTight] font-medium text-[#000000] text-[16px] lg:text-[22px]'>{item.heading}</p>
                                    <p className='font-[InterTight] font-medium text-[#000000] text-[16px] lg:text-[22px]'>{item.desc}</p>
                                </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/never_sell.png" width={600} height={600} alt="Never Sell" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Never_Sell;