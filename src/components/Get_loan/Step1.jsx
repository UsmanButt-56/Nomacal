'use client';
import React, { useState } from 'react'
import Inputname from '../Inputname/Inputname';
import ImageUpload from '../Imageupload/ImageUpload';

function Step1({  setStep, formData, setFormData }) {
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [country, setCountry] = useState("");
    // const [code, setCode] = useState("");
    // const [address, setAddress] = useState("");
    // const [amount, setAmount] = useState("");
    // const [longterm, setLongterm] = useState("");

    // const handleform = (e) => {
    //     e.preventDefault();
    // }
    const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  if (type === "file") {
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Inputname label="First name" name="fname" type="text" value={formData.fname} onChange={handleChange} placeholder='Enter first name...' bgColor="bg-white"/>
                <Inputname label="Last name" name="lname" type="text" value={formData.lname} onChange={handleChange} placeholder='Enter last name...' bgColor="bg-white"/>
                <Inputname label="Country" name="country" type="text" value={formData.country} onChange={handleChange} placeholder='Enter your country...' bgColor="bg-white"/>
                <Inputname label="Postal Code" name="postal_Code" type="text" value={formData.postal_Code} onChange={handleChange} placeholder='Enter postal code...' bgColor="bg-white"/>
            </div>
            <div>
                <Inputname label="Address" type="text" value={formData.address} onChange={handleChange} placeholder='Enter your full address...' name="address" bgColor="bg-white"/>
                <div className='flex flex-col gap-2'>
                    <ImageUpload value={formData.lisence_front} text="Identification (Driver’s license or passport front & back or Passport) *" label="lisence_front" image="/assets/receive-image.png" side="Front Side" desc="Upload your drivers license... "  onChange={handleChange}/>
                    <ImageUpload value={formData.lisence_back} label="lisence_back" side="Back Side" desc="Upload your drivers license... " image="/assets/receive-image.png" onChange={handleChange}/>
                </div>
                <Inputname label="*(Avoid letter & periods, Number and commas only, USD value)" type="text" value={formData.loan_size} onChange={handleChange} name="loan_size" placeholder='Enter your loan size...' bgColor="bg-white" />
                <Inputname label="Long term selection" type="text" value={formData.long_term} onChange={handleChange} placeholder='Please select..' name="long_term" bgColor="bg-white" />
                <div className='flex gap-2'>
                    <label htmlFor="" className="font-['InterTight'] font-medium text-[18px] leading-[20px] text-[#000000] py-5">Download & Sign Agreement</label>
                    {/* <Image src="/assets/upload.png" width={24} height={24} alt="download" /> */}
                </div>
                <ImageUpload value={formData.user_signed} text="*(If you wish to add an emergency contact in the event we cannot reach you please add there info into the second section of ‘’Borrower Information’’ listed on this contract. If you choose not to simply leave the second section blank.)" image="/assets/lucide_upload.png" label="user_signed" desc="Upload signed document here..." onChange={handleChange}/>
            </div>

            <div className='mt-5 mx-auto bg-[#FFD700] text-black w-[139px] flex items-center justify-center h-[54px] rounded-[40px] cursor-pointer'>
                <button type="button" onClick={() => setStep(2)} className='cursor-pointer'>Continue</button>
            </div>

        </form>
    )
}

export default Step1
