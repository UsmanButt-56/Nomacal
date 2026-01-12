import Image from 'next/image';
import React from 'react'
import { blog } from '../../data/staticData';
function BlogCards() {
    return (
        <div className=''>
            <div className='max-w-[1400px] mx-auto px-3'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        blog.map((blog) => (
                            <div className='bg-white flex flex-col gap-4 rounded-[20px] p-4 mb-5' key={blog.id}>
                                <div className=''>
                                    <Image src="/assets/Blog-image.jpg" width={500} height={300} alt="blog" className='rounded-[20px]' />
                                </div>
                                <h1 className="font-['InterTight'] font-semibold text-[22px]">Bitcoin: A Strategic Reserve for Business Continuity in Critical Moments</h1>
                                <p className="font-['InterTight'] font-regular text-[16px]">In today’s rapidly evolving business environment, companies must be prepared for unforeseen disruptions, especially in their financial operations.</p>
                                <div className='bg-[#F6F6F6] h-[66px] w-[132px] flex items-center justify-center rounded-[20px]'>
                                    <button className="font-['InterTight'] font-medium text-[18px]">Read More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCards;