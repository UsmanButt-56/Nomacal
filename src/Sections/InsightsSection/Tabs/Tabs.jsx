'use client'
import React, { useState } from 'react'
import Our_Film from './Our_Film/Our_Film';
import Philosophy from './Philosophy/Philosophy';
import Approach from './Approach/Approach';
import Team from './Team/Team';

function Tabs() {
    const Tab = [
        { id: 1, title: "Our Film", link: "film" },
        { id: 2, title: "Philosophy", link: "philosophy" },
        { id: 3, title: "Our Approach to Cusotdy", link: "cusotdy" },
        { id: 4, title: "Our Team", link: "team" },
    ]

    const [active, setActive] = useState(1);
    return (
        <div>
        <div className='max-w-[1400px] mx-auto lg:py-10'>
            <div className='flex bg-white justify-around w-full rounded-[20%]'>
                {
                    Tab.map((item) => (
                        <div key={item.id} onClick={() => setActive(item.id)} className={`font-[InterTight] text-[10px] md:text-[20px] lg:text-[24px] border-r-1 border-black w-full flex font-semibold justify-center items-center ${active === item.id ? 'bg-black text-white' : 'bg-white text-black'} text-[#000000] py-1 md:py-3 cursor-pointer`}>
                            <button className='cursor-pointer'>{item.title}</button>
                        </div>
                    ))
                }
            </div>
            </div>

            <div className='mt-5'>
                { active === 1 && <Our_Film /> }
                { active === 2 && <Philosophy /> }
                { active === 3 && <Approach /> }
                { active === 4 && <Team /> }
            </div>
        </div>
    )
}

export default Tabs;