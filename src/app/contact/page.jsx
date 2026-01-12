'use client';
import React, { useState } from 'react';
import Inputname from '@/components/Inputname/Inputname';

function page() {
  const [number , setNumber] = useState("");
  const [email , setEmail] = useState("");
  const [fname , setFname] = useState("");
  const [lname , setLname] = useState("");
  const [emails , setEmails] = useState("");
  const [country , setCountry] = useState("");
  const [message , setMessage] = useState("");

  const onhandlesubmit = (e) => 
  {
    e.preventDefault();
    const formData = {
      number,
      email,
      fname,
      lname,
      emails,
      country,
      message,
    };
    console.log("Form submitted", formData);
    alert("Form submitted successfully");
  }
  
  return (
    <div className='max-w-[1400px] mx-auto bg-white rounded-[30px] lg:rounded-[60px] p-7 lg:p-20 m-10'>
       <form onSubmit={onhandlesubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-15">
        {/* Left Side */}
        <div>
          <h1 className="font-['InterTight'] font-semibold text-[32px] lg:text-[54px]">Contact Us</h1>
          <div className='mt-10 flex flex-col border-b-1 border-black border-opacity-18'>
            <label className="font-['InterTight'] font-semibold text-[18px] lg:text-[24px]" htmlFor="">Phone number</label>
            <input type="text" placeholder="+1 242 4353 3535 3" className='py-3 outline-none' />
          </div>
          <div className='mt-5 flex flex-col'>
            <label className="font-['InterTight'] font-semibold text-[18px] lg:text-[24px]" htmlFor="">Email</label>
            <input type="text" placeholder="Nomacal@gmail.com" className='py-3 outline-none' />
          </div>
        </div>
        {/* Right Side */}
        <div>
        <Inputname label="First name" type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Enter first name...' />
        <Inputname label="Last name" type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Enter last name...' />
        <Inputname label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address...' />
        <Inputname label="Country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Select your country' />
        <Inputname label="Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type your message here...' />
        <div className='cursor-pointer mt-5 w-full bg-[#FFD700] text-black flex items-center justify-center h-[51px] rounded-[40px]'>
          <button className='cursor-pointer'>Submit</button>
        </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default page;