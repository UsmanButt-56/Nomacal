import Image from 'next/image';
import React from 'react'

function ImageUpload({text ,label , onChange , side , desc , image}) {
    return (
        <div>
            <label htmlFor="" className="font-['InterTight'] font-medium text-[18px] leading-[20px] text-[#000000]">{text}</label>
            <div className='cursor-pointer py-5 bg-white flex flex-col items-center justify-center rounded-[12px]' onClick={() => document.getElementById(label).click()}>
                <Image src={image} width={24} height={24} alt="upload"/>
                <p>{side}</p>
                <p>{desc}</p>
            </div>
            <input
                type="file"
                id={label}
                className="hidden"
                onChange={onChange}
            />
        </div>
    )
}

export default ImageUpload;