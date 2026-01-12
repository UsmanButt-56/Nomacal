"use client";
import React,{useState} from 'react'
import { Eye , X , EyeOff} from 'lucide-react';

function Inputname({ name , label , type , placeholder , onChange , value}) {
  //const [value , setValue] = useState(" ");
  const [passwordShow , setPasswordShow] = useState(false);

  const removeInfo = () => 
  {
    console.log("remove info");
    setValue(value.slice(0 , -1));
  }
  return (
    <div>
      <h1 className="font-['InterTight'] font-medium text-[18px] leading-[20px] text-[#000000] mt-3">{label} *</h1>
      <div className='relative lg:my-3'>
        <input type={type === "password" ? (passwordShow ? 'text' : 'password') : type} name={name} placeholder={placeholder} value={value} onChange={onChange} className="font-['InterTight'] w-full bg-[#F5F5F5] rounded-md h-[50px] lg:h-[60px] ps-3 pe-15 outline-none "/>
        <div className='absolute right-4 top-4 cursor-pointer'>
          {
            type ==="password" ? (
              passwordShow ? (
                <EyeOff size={24} color="black" onClick={() => setPasswordShow(false)}/>
              ) : ( <Eye size={24} color="black"  onClick={() => setPasswordShow(true)}/>  ))  : <div onClick={removeInfo}><X size={24} color="black" /></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Inputname;