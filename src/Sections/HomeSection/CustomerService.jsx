import React from 'react'
import { CustomerServices } from '@/data/staticData';
function CustomerService() {
    return (
        <div className='bg-black text-white py-10 lg:py-20'>
            <div className='max-w-[1400px] mx-auto lg:my-20 px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col justify-center space-y-5'>
                        <h1 className='lg:w-80 font-[InterTight] font-normal text-[42px] lg:text-[72px] leading-12 lg:leading-23'>Customer Service</h1>
                        <div className='w-36 h-12 bg-yellow-500 text-black flex items-center justify-center rounded-full'>
                            <button>Get loan now</button>
                        </div>
                    </div>
                    {
                        CustomerServices.map((customer, index) => (
                            <div className='pt-5' key={customer.id}>
                                <p>{customer.desc}</p>
                                <br />
                                <p>{customer.text}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default CustomerService;