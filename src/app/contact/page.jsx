'use client';
import React, { useState } from 'react';
import Inputname from '@/components/Inputname/Inputname';

function page() {
 
  const [formData , setFormData] = useState({
    number : '',
    email : '',
    fname : '',
    lname : '',
    emails : '',
    country : '',
    message : '',
  });

   // ✅ handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const onHandleSubmit = async (e) => 
  {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/contact/createContact" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("Form submitted successfully", {data});
    } catch (error) {
      console.log("Error submitting form", error);
    }
  }
  
  return (
    <div className='max-w-[1400px] mx-auto bg-white rounded-[30px] lg:rounded-[60px] p-7 lg:p-20 m-10'>
       <form onSubmit={onHandleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-15">
        {/* Left Side */}
        <div>
          <h1 className="font-['InterTight'] font-semibold text-[32px] lg:text-[54px]">Contact Us</h1>
          <div className='mt-10 flex flex-col border-b-1 border-black border-opacity-18'>
            <label className="font-['InterTight'] font-semibold text-[18px] lg:text-[24px]" htmlFor="">Phone number</label>
            <input name="number" type="text" placeholder="+1 242 4353 3535 3" className='py-3 outline-none' value={formData.number} onChange={handleChange} />
          </div>
          <div className='mt-5 flex flex-col'>
            <label className="font-['InterTight'] font-semibold text-[18px] lg:text-[24px]" htmlFor="">Email</label>
            <input name="email" type="text" placeholder="Nomacal@gmail.com" className='py-3 outline-none' value={formData.email} onChange={handleChange} />
          </div>
        </div>
        {/* Right Side */}
        <div>
        <Inputname name="fname" label="First name" type="text" value={formData.fname} onChange={handleChange} placeholder='Enter first name...' bgColor="bg-gray-200"/>
        <Inputname name="lname" label="Last name" type="text" value={formData.lname} onChange={handleChange} placeholder='Enter last name...'  bgColor="bg-gray-200"/>
        <Inputname name="emails" label="Email address" type="email" value={formData.emails} onChange={handleChange} placeholder='Enter your email address...'  bgColor="bg-gray-200"/>
        <Inputname name="country" label="Country" type="text" value={formData.country} onChange={handleChange} placeholder='Select your country'  bgColor="bg-gray-200"/>
        <Inputname name="message" label="Message" type="text" value={formData.message} onChange={handleChange} placeholder='Type your message here...'  bgColor="bg-gray-200"/>
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