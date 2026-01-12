'use client';
import React, { useState } from 'react'
import Inputname from '../Inputname/Inputname';
import ImageUpload from '../Imageupload/ImageUpload';

function Step1({ setStep }) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [country, setCountry] = useState("");
    const [code, setCode] = useState("");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [longterm, setLongterm] = useState("");

    const handleform = (e) => {
        e.preventDefault();
    }
    return (
        <form action="" onSubmit={handleform}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Inputname label="First name" type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Enter first name...' />
                <Inputname label="Last name" type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Enter last name...' />
                <Inputname label="Country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Enter your country...' />
                <Inputname label="Postal Code" type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder='Enter postal code...' />
            </div>
            <div>
                <Inputname label="Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your full address...' />
                <div className='flex flex-col gap-2'>
                    <ImageUpload text="Identification (Driver’s license or passport front & back or Passport) *" label="frontSide" image="/assets/receive-image.png" side="Front Side" desc="Upload your drivers license... " />
                    <ImageUpload label="backSide" side="Back Side" desc="Upload your drivers license... " image="/assets/receive-image.png" />
                </div>
                <Inputname label="*(Avoid letter & periods, Number and commas only, USD value)" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter your loan size...' />
                <Inputname label="Long term selection" type="text" value={longterm} onChange={(e) => setLongterm(e.target.value)} placeholder='Please select..' />
                <div className='flex gap-2'>
                    <label htmlFor="" className="font-['InterTight'] font-medium text-[18px] leading-[20px] text-[#000000] py-5">Download & Sign Agreement</label>
                    {/* <Image src="/assets/upload.png" width={24} height={24} alt="download" /> */}
                </div>
                <ImageUpload text="*(If you wish to add an emergency contact in the event we cannot reach you please add there info into the second section of ‘’Borrower Information’’ listed on this contract. If you choose not to simply leave the second section blank.)" image="/assets/lucide_upload.png" label="backSide" desc="Upload signed document here..." />
            </div>

            <div className='mt-5 mx-auto bg-[#FFD700] text-black w-[139px] flex items-center justify-center h-[54px] rounded-[40px] cursor-pointer'>
                <button onClick={() => setStep(2)} className='cursor-pointer'>Continue</button>
            </div>

        </form>
    )
}

export default Step1
