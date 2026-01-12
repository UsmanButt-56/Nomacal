'use client';
import React, { useState } from 'react';
import Inputname from '@/components/Inputname/Inputname';
import Image from 'next/image';
import ImageUpload from '@/components/Imageupload/ImageUpload';
import Step1 from '@/components/Get_loan/Step1';
import Step2 from '@/components/Get_loan/Step2';

function page() {
    const [step , setStep] = useState(1);
    return (
        <div>
            <div className='max-w-[1400px] mx-auto py-10 lg:py-20 px-3'>
                <h1 className="font-['InterTight'] font-semibold text-[34px] lg:text-[54px] text-center">Loan Request Submission</h1>
                {/* 2 Terms Verify */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-5 lg:py-10">
                    <div className={`flex flex-col gap-3 ${step === 1 ? 'block' : 'hidden'} lg:block`}>
                        <div className='flex items-center gap-2'>
                            <Image src="/assets/cuida_edit-outline.png" width={24} height={24} alt="icon" />
                            <hr className='w-full h-[5px]' />
                        </div>
                        <div>
                            <p className={`font-['InterTight'] font-regular ${step === 1 ? 'text-[18px] text-black' : 'text-gray-400 text-[18px]'}`}>Step 1</p>
                            <h1 className={`font-['InterTight'] font-semibold ${step === 1 ? 'text-[24px] text-black' : 'text-gray-400 text-[18px]'}`}>Personal Information</h1>
                        </div>
                    </div>
                    <div className={`lg:flex flex-col gap-3 ${step === 2 ? 'block' : 'hidden'} lg:block`}>
                        <div className='flex items-center gap-2'>
                            <Image src="/assets/cuida_edit-outline.png" width={24} height={24} alt="icon" />
                            <hr className='w-full h-[5px]' />
                        </div>
                        <div>
                            <p className={`font-['InterTight'] font-regular ${step === 2 ? 'text-[18px] text-black' : 'text-gray-400 text-[18px]'}`}>Step 2</p>
                            <h1 className={`font-['InterTight'] font-semibold ${step === 2 ? 'text-[24px] text-black' : 'text-gray-400 text-[18px]'}`}>Bank Details</h1>
                        </div>
                    </div>
                </div>
                {/* END */}
                {
                    step === 1 && 
                    (
                        <Step1 setStep = {setStep}/>
                    )
                }
                {
                    step === 2 && 
                    (
                        <Step2 />
                    )
                }

            </div>
        </div>
    )
}

export default page;