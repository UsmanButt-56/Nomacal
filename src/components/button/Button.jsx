import Image from 'next/image';
import React from 'react'
import profile from '../../../public/icons/profile.png';
function Button({text , backgroundcolor, textColor , image , onClick}) {
  return (
    <button onClick={onClick} className={`cursor-pointer h-[51px] ${backgroundcolor} flex items-center px-6 rounded-[50px] space-x-3 ${textColor}`}>
      {image && <Image src={profile} alt="Profile Icon" width={32} height={32} />}
      <h1>{text}</h1>
    </button>
  )
}

export default Button;