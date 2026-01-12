"use client";
import Link from 'next/link';
import React from 'react'
import Button from '../button/Button';
import profile from '../../../public/icons/profile.png';
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";
function page() {
  const pathname = usePathname();
  const nav = [
    { id : 1 , name : "Home" , link : "/"},
    { id : 2 , name : "Insights" , link : "/insights"},
    { id : 3 , name : "About Us" , link : "/about"},
    { id : 4 , name : "Contact Us" , link : "/contact"},
    { id : 5 , name : "Blog" , link : "/blog"},
  ]
  return (
    <div className='max-w-[1800px] mx-auto px-2 py-5'>
    <div className='h-[75px] bg-[#FFFFFF] rounded-[50px] my-[0px] flex mx-auto '>
      {/* my-[12px] */}
       <div className='flex justify-between items-center w-full px-4'>
        <div>
          <h1 className='font-inter font-semibold text-[24px]'>Nomacal</h1>
        </div>
        <div>
          <ul className='hidden lg:flex items-center space-x-5'>
            {
              nav.map((item) => {
                 const isActive = pathname === item.link;
                 return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`font-inter text-[16px] transition-all duration-200 ${
                      isActive
                        ? "font-semibold text-black"
                        : "font-normal text-gray-600 hover:font-semibold hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
                )
              })
            }
            <Button text="Get loan now" backgroundcolor="bg-black" textColor="text-white" />
            <Button text="John Smith" backgroundcolor="bg-[#E7E7E7]" textColor="text-[#000000]" image={profile}/>
          </ul>
          <div className='flex lg:hidden'>
            <FaBars className="w-8 h-8"/>
          </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default page;