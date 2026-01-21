'use client';
import React,{ useState } from 'react'
import Inputname from '../Inputname/Inputname';
import ImageUpload from '../Imageupload/ImageUpload';

function Step2({ formData, setFormData }) {
        // const [email, setEmail] = useState("");
        // const [bank, setBank] = useState("");
        // const [account, setAccount] = useState("");
        // const [iban, setIban] = useState("");
        // const [swift, setSwift] = useState("");
        // const [branch, setBranch] = useState("");
        // const [transit, setTransit] = useState("");

        // const handleform = (e) => {
        //     e.preventDefault();

        //     alert("Form Submitted");
        // }
         const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Hello");
//   }
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Hello");

  //   try
  //   {
  //       const response = await fetch('http://localhost:5000/api/loanrequest/createloan' , {
  //           method : 'POST',
  //           headers : {
  //               'Content-Type' : 'application/json'
  //           },
  //           body : JSON.stringify(formData)
  //       });
  //       const data = await response.json();
  //       console.log("Form submitted successfully", {data});
  //   }
  //   catch(error)
  //   {
  //       console.log("Error submitting form", error);
  //   }
  // }

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Hello");

  try {
    // 🔹 CREATE FormData object
    const data = new FormData();

    // 🔹 Append normal fields
    data.append("fname", formData.fname);
    data.append("lname", formData.lname);
    data.append("country", formData.country);
    data.append("postal_Code", formData.postal_Code);
    data.append("address", formData.address);
    data.append("loan_size", formData.loan_size);
    data.append("long_term", formData.long_term);

    data.append("email", formData.email);
    data.append("bank_name", formData.bank_name);
    data.append("account_number", formData.account_number);
    data.append("iban_code", formData.iban_code);
    data.append("swift_code", formData.swift_code);
    data.append("branch_Number", formData.branch_Number);
    data.append("Transit_Number", formData.Transit_Number);
    data.append("confirm", formData.confirm);

    // 🔹 Append FILES (MOST IMPORTANT CHANGE)
    data.append("lisence_front", formData.lisence_front);
    data.append("lisence_back", formData.lisence_back);
    data.append("user_signed", formData.user_signed);

    // 🔹 Send request WITHOUT headers
    const response = await fetch(
      "http://localhost:5000/api/loanrequest/createloan",
      {
        method: "POST",
        body: data
      }
    );

    const result = await response.json();
    console.log("Form submitted successfully");
  } catch (error) {
    console.log("Error submitting form", error);
  }
};


  return (
    <form action="" onSubmit={handleSubmit}>
        <div>
            <Inputname name="email" label="Email" type="email" value={formData.email} onChange={handleChange} placeholder='Enter your email...' bgColor="bg-white"/>
            <Inputname name="bank_name" label="Bank Name" type="text" value={formData.bank_name} onChange={handleChange} placeholder='Enter yout bank name...' bgColor="bg-white"/>
            <Inputname name="account_number" label="Bank Account Number" type="text" value={formData.account_number} onChange={handleChange} placeholder='Enter your bank account number *...' bgColor="bg-white"/>
            <Inputname name="iban_code" label="IBAN Code" type="text" value={formData.iban_code} onChange={handleChange} placeholder='Enter your IBAN code...' bgColor="bg-white"/>
            <Inputname name="swift_code" label="Swift Code" type="text" value={formData.swift_code} onChange={handleChange} placeholder='Enter your bank swift code...' bgColor="bg-white"/>
            <Inputname name="branch_Number" label="Branch Number" type="text" value={formData.branch_Number} onChange={handleChange} placeholder='Enter your branch number...' bgColor="bg-white"/>
            <Inputname name="Transit_Number" label="Transit Number" type="text" value={formData.Transit_Number} onChange={handleChange} placeholder='Enter your transit number...' bgColor="bg-white"/>

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
                <input type="checkbox" name="confirm" checked={formData.confirm} onChange={handleChange} />
                <label>I consent to be contacted by Nomacal for purpose related to this loan request.</label>
            </div>

            <div className='mt-5 bg-[#FFD700] text-black w-[220px] flex items-center justify-center h-[54px] rounded-[40px] cursor-pointer'>
                <button type="submit" className='cursor-pointer'>Confirm & continue</button>
            </div>
        </div>
        </form>
  )
}

export default Step2;