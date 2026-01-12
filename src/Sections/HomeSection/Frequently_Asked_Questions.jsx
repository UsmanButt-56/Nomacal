'use client';
import React, { useState , useEffect } from 'react';
import Image from 'next/image';
//import { faqs } from '@/data/staticData';
function Frequently_Asked_Questions() {

    const [openId, setOpenId] = useState(null);
    const openanswer = (id) => {
        console.log("clicked");
        setOpenId(openId === id ? null : id);
    }

    // To fetch data from database
    const [faqs , setFaqs] = useState([]);
    const getFaqs = async () => 
    {
        try 
        {
            const response = await fetch('http://localhost:5000/api/frequently/getFrequently');
            const data = await response.json();
            setFaqs(data);
            console.log("Fetched data :" , data);
        }
        catch (error)
        {
            console.log("Error fetching faqs: ", error);
        }
    }

    useEffect(() => {
        getFaqs();
    } , [])

    return (
        <div className='max-w-[1400px] mx-auto my-10'>
            <div className='py-5'>
                <h1 className='font-[InterTight] font-semibold text-[22px] lg:text-[54px] text-black text-center'>Frequently Asked Questions (FAQs)</h1>
            </div>
            <div className='px-3 lg:px-0'>
            {
                faqs.map((faq , index) => (
                    <div className='bg-white px-3 lg:px-5 w-full rounded-[12px] mb-3 lg:mb-5' key={faq._id}>
                        <div className='flex justify-between gap-5 items-center py-3 lg:py-5'>
                            <h1 className='font-[InterTight] font-semibold text-[12px] lg:text-[18px] text-[#000000]'>{index + 1}.{" "}{faq.question}</h1>
                            <div className='cursor-pointer' onClick={() => openanswer(faq._id)}>
                                <Image src="/assets/Arrowdown.png" width={24} height={24} alt="arrow" />
                            </div>
                            {/* <p>FAQs loaded: {faq.length}</p> */}
                        </div>
                        {openId === faq._id &&
                            <div className='border-t border-[#000000] border-opacity-20 py-3 lg:py-5 text-[12px] lg:text-[18px]'>
                                <p className='pt-0 text-opacity-50'>{faq.answer}</p>
                            </div>
                        }
                    </div>
                ))
            }
</div>
        </div>
    )
}

export default Frequently_Asked_Questions;