'use client';
import React,{useState , useEffect} from 'react'
import { reasons } from '../../data/staticData';

function Reasons_to_borrow() {
    const [borrow , setBorrow] = useState([]);
    // const getBorrows = async () =>
    // {
    //     try
    //     {
    //         const response = await fetch('https://nomacal-production.up.railway.app/api/borrow/getborrow');
    //         const data = await response.json();
    //         console.log("Borrow data" , data);
    //         setBorrow(data);
    //     }
    //     catch(error)
    //     {
    //         console.log("Error fetching borrows" ,error);
    //     }
    // }

    const getBorrows = async () => {
  try {
    const response = await fetch('https://nomacal-production.up.railway.app/api/borrow/getborrow');
    const data = await response.json();
    if (Array.isArray(data)) {
      setBorrow(data);
    } else {
      // API failed, using fallback data
      setBorrow(reasons); // fallback to static data
    }
  } catch (error) {
    // API failed, using fallback data
    setBorrow(reasons);
  }
};


    useEffect(() => {
        getBorrows();
    } , [])

    return (
        <div className='bg-black text-white px-5 lg:px-10'>
            <div className='max-w-[1400px] mx-auto py-[6.25vw]'>
                <div>
                    <h2 className="font-['InterTight'] font-medium text-[18px] leading-[26px] md:text-[42px] md:leading-[42px] lg:text-[52px] lg:leading-[96px] xl:text-[72px] xl:leading-[96px]">Reasons to borrow with Nomacal</h2>
                </div>
                <div>
                    <h6 className="font-['InterTight'] font-medium text-[10px] leading-[12px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[38px] xl:text-[24px] xl:leading-[38px]">Nomacal isn't just a lending platform-it's a smarter way to carve a channel between your Bitcoin and your real life. Here are four reasons why it gives you a real edge when it matters most.</h6>
                </div>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-10 lg:mt-20 mb-10'>
                    {
                        borrow.map((item) => (
                            <div key={item.id} className='flex flex-col gap-2'>
                                <h1 className="font-['InterTight'] font-medium text-[10px] leading-[12px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[38px] xl:text-[24px] xl:leading-[100%]">{item.title}</h1>
                                <p className="font-['InterTight'] font-normal text-[10px] leading-[12px] md:text-[12px] md:leading-[22px] lg:text-[14px] lg:leading-[38px] xl:text-[16px] xl:leading-[38px] text-[#FFFFFF80] opacity-50">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Reasons_to_borrow;
