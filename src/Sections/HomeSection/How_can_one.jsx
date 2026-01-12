import React from 'react';
import { one_can_asset } from '../../data/staticData';
import Image from 'next/image';

function How_can_one() {
  return (
    <div className='bg-white text-black p-5 lg:p-10'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='grid xl:grid-cols-2 grid-cols-1 items-center'>
          <div>
            <h1 className="font-['InterTight'] font-medium text-[18px] leading-[20px] md:text-[48px] md:leading-[44px] lg:text-[64px] lg:leading-[60px] xl:text-[72px] xl:leading-[100%]">How can one asset offer peace, security, and prosperity—without being spent?</h1>
            <div>
              {one_can_asset?.map((item) => (
                <div key={item.id} className='my-5'>
                  <h4 className="font-['InterTight'] text-[10px] leading-[12px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[38px] xl:text-[16px] xl:leading-[100%]">{item.id}{". "}{item.points}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='relative w-[230px] h-[250px] md:w-[330px] lg:w-[430px] lg:h-[300px] xl:w-[616px] xl:h-[537px] mx-auto flex justify-center items-center'>
            <Image src="/assets/triangle.png" alt="triangle" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default How_can_one;