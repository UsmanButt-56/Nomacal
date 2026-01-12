import Image from 'next/image';
import React from 'react'

function Mission() {
    return (
        <div className='bg-white w-full'>
            <div className='max-w-[1400px] mx-auto p-5 lg:py-20'>
                <h1 className="font-['InterTight'] font-semibold text-[34px] lg:text-[54px]">Our Mission</h1>
                <div className="flex flex-col xl:flex-row gap-5">
                    <div className='flex-1 flex items-center'>
                        <p className="font-['InterTight'] font-regular text-[16px] lg:text-[22px]">Nomacal is more than just a lending platform—it’s a bold step forward in the evolution of finance. We are a Bitcoin-powered lending service that allows users to access fast, secure, and reliable cash loans without ever facing the threat of a margin call or forced liquidation of their crypto assets.
                            Traditional crypto lending platforms often come with hidden risks: when the price of Bitcoin drops, borrowers can be forced to either top up their collateral or see their assets sold off automatically. This creates stress, instability, and financial uncertainty.At Nomacal, we’ve completely eliminated that anxiety with our no-margin-call model. Here, your Bitcoin remains safe and untouched—no matter what happens in the market. You simply deposit your BTC as collateral, and in return, you can borrow up to 50% of its value in fiat currency, with a fixed and transparent 10% annual interest rate. Whether you’re funding a business, handling an emergency, or simply looking to free up cash while holding onto your Bitcoin investment, Nomacal offers a smooth, predictable solution.
                            Our platform is built with simplicity and transparency at its heart. From creating an account to submitting your loan request and uploading identification documents, the entire process is seamless and intuitive.</p>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <div className='w-[300px] h-[300px] lg:w-[670px] lg:h-[720px] relative'>
                            <Image src="/assets/Bitcoin.png" fill alt='bitcoin' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;