import React from 'react';
import { terms } from '../../data/staticData';
function See_what_you() {
    return (   
        <div className='max-w-[1400px] mx-auto my-10 lg:my-20'>
            <div className='flex flex-col py-0 lg:py-10 px-5'>
                <div className='flex flex-col gap-3 text-center items-center'>
                    <h1 className="lg:w-[476px] font-['InterTight'] font-semibold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[100%] text-center">See what you can <span className='font-normal font-[GreatVibes]'>borrow</span></h1>
                    <h1 className="lg:w-[476px] font-['InterTight'] font-normal text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[100%] tracking-[1.12px] text-center">Get liquidity for investments, debt consolidations and expenses.</h1>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
                    {/* 1st Block */}
                    {
                        terms.map((term, map) => (
                            <div className='bg-[#FFFFFF] p-5 lg:p-10 rounded-2xl' key={term.id}>
                                <h1 className="font-['InterTight'] font-regular text-[18px] text-[#000000]">{term.label}</h1>
                                <div className="flex justify-between font-['InterTight'] font-regular text-[12px] lg:text-[18px] text-[#000000] opacity-40">
                                    <h1>{term.value}</h1>
                                    <h1>{term.time}</h1>
                                </div>
                                <div className="flex justify-between font-['InterTight'] font-medium text-[18px] lg:text-[48px] text-[#000000]">
                                    <h1>{term.amount}</h1>
                                    <h1>{term.limit}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default See_what_you;