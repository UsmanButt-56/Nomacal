'use client'
import React,{ useState } from 'react'
import Inputname from '../Inputname/Inputname';
import ImageUpload from '../Imageupload/ImageUpload';

function Step2() {
        const [email, setEmail] = useState("");
        const [bank, setBank] = useState("");
        const [account, setAccount] = useState("");
        const [iban, setIban] = useState("");
        const [swift, setSwift] = useState("");
        const [branch, setBranch] = useState("");
        const [transit, setTransit] = useState("");

        const handleform = (e) => {
            e.preventDefault();

            alert("Form Submitted");
        }
  return (
    <form action="" onSubmit={handleform}>
        <div>
            <Inputname label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email...' />
            <Inputname label="Bank Name" type="text" value={bank} onChange={(e) => setBank(e.target.value)} placeholder='Enter yout bank name...' />
            <Inputname label="Bank Account Number" type="text" value={account} onChange={(e) => setAccount(e.target.value)} placeholder='Enter your bank account number *...' />
            <Inputname label="IBAN Code" type="text" value={iban} onChange={(e) => setIban(e.target.value)} placeholder='Enter your IBAN code...' />
            <Inputname label="Swift Code" type="text" value={swift} onChange={(e) => setSwift(e.target.value)} placeholder='Enter your bank swift code...' />
            <Inputname label="Branch Number" type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder='Enter your branch number...' />
            <Inputname label="Transit Number" type="text" value={transit} onChange={(e) => setTransit(e.target.value)} placeholder='Enter your transit number...' />
            
            <div className='flex gap-2'>
               <div>
                <h1 className="font-['InterTight'] font-semibold text-[16px]">Note : </h1>
               </div>
               <div>
                 <p className="font-['InterTight'] font-regular text-[16px]">*Once collateral is received, we send you a simple form confirming successful deposit.</p>
                 <div className="font-['InterTight'] font-regular text-[16px] text-[#000000] opacity-50">
                 <p>This form includes instructions on their monthly interest payments, including:</p>
                 <ol>
                    <li>1. Amount due per month</li>
                    <li>2. Where to send the payments</li>
                    <li>3. Our financial institution’s credentials for payment processing.</li>
                 </ol>
                 </div>
               </div>
            </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <label>I consent to be contacted by Nomacal for purpose related to this loan request.</label>
            </div>

            <div className='mt-5 bg-[#FFD700] text-black w-[220px] flex items-center justify-center h-[54px] rounded-[40px] cursor-pointer'>
                <button className='cursor-pointer'>Confirm & continue</button>
            </div>
        </div>
        </form>
  )
}

export default Step2;