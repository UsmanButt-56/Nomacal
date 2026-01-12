"use client";
import React,{useState} from 'react'
import Image from 'next/image';
import Inputname from '@/components/Inputname/Inputname';
import LongButton from '@/components/button/LongButton';
// import { useSignUp } from "@clerk/nextjs";
// import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  //const { isLoaded, signUp, setActive } = useSignUp();
  const [loading , setLoading] = useState(false);
  //console.log("🧩 Clerk Connected:", isLoaded);

  const [formData , setFormData] = useState({
    fname : '',
    lname : '',
    country : '',
    email : '',
    password : ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  }
  
const onhandleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
     const user = userCredential.user;
     console.log("auth:", auth);
     console.log("db:", db);
     console.log("user:", user);
     
     if (!user?.uid) throw new Error("User UID missing!"); 

     await setDoc(doc(db, "users" , user?.uid), {
        userId : user.uid,
        fname: formData.fname,
        lname: formData.lname,
        country: formData.country,
        email: formData.email,
        createdAt: new Date(),
     });
     toast.success("Signup successful!");
     router.push("/login");
     console.log("User created:", user);
  }
  catch(error)
  {
    console.log("Error is", error.message);
    if (error.code === "auth/email-already-in-use") 
    {
      toast.error("This email is already registered. Please log in instead.");
    } 
    else 
    {
      toast.error(error.message);
    }
  }
  finally
  {
    setLoading(false);
  }
}

  return (
    <div className='w-full min-h-screen flex'>
      <div className='hidden xl:w-[45%] bg-black xl:flex justify-center items-center'>
               {/* <div className=''> */}
                 <Image src="/assets/logo.png" alt="logo" width={470} height={470} />
               {/* </div> */}
      </div>
      <div className='w-full xl:w-[55%] p-5 lg:p-10 2xl:p-15 bg-white'>
        <h1 className="font-['InterTight'] font-medium text-[28px] leading-[30px] md:text-[48px] md:leading-[44px] lg:text-[52px] lg:leading-[60px] 2xl:text-[72px] 2xl:leading-[100%]">Welcome back to nomacal</h1>
        <h1 className="font-['InterTight'] text-[18px] leading-[20px]">Please enter your details...</h1>

        <form className='my-5 xl:my-10 2xl:my-20' onSubmit={onhandleSubmit}>
            <div className=''>
              <div className='md:flex gap-5 w-full'>
                <div className='flex-1'>
                  <Inputname label="Full Name" value={formData.fname} name="fname" type="text" placeholder='Enter your full name' onChange={handleChange} />
                </div>
                <div className='flex-1'>
                  <Inputname label="Last Name" value={formData.lname} name="lname" type="text" placeholder='Enter your last name' onChange={handleChange} />
                </div>
              </div>

                <Inputname label="Email address" value={formData.email} name="email" type="email" placeholder='Enter your email address' onChange={handleChange}/>
                <Inputname label="Country" value={formData.country} name="country" type="text" placeholder='Select your country' onChange={handleChange} />
                <Inputname label="Password" value={formData.password} name="password" type="password" placeholder='Enter your Password' onChange={handleChange} />

                <div className='flex justify-between items-center my-5'>
                    <div className='flex items-center'>
                        <input type="checkbox" id="remember" className='w-4 h-4' />
                        <span  htmlFor="remember" className="font-['InterTight'] text-[14px] leading-[16px] ms-2">Remember me</span>
                    </div>
                    <div>
                        <h1 className="font-['InterTight'] text-[14px] leading-[16px] text-[#00000080]">Forgot your password?</h1>
                    </div>
                </div>

                <div className='my-1 md:my-4 xl:my-20'>
                  {/* <div id="clerk-captcha"></div> */}
                  <button
                type="submit"
                disabled={loading}
                className="w-full border-1 border-black h-[40px] lg:h-[60px] bg-black text-white flex justify-center items-center rounded-full cursor-pointer mt-5"
              >
                Sign Up
              </button>
                    {/* <LongButton label="Sign Up"        bgColor='bg-black' textColor='#FFFFFF' type="submit"/> */}
                    <LongButton label="Back to home" bgColor='bg-white' textColor='black' />
                </div>

                {/* <div className='flex items-center justify-center w-full'>
                  <h1 className="font-['InterTight'] text-[14px] leading-[16px] text-center mt-5">Already have an account<button className='cursor-pointer' onClick={()=>{router.push("/login")}}> <span className='text-black font-medium font-bold'>Sign in?</span></button></h1>
                </div> */}

            </div>
        </form>
                <div className='flex items-center justify-center w-full'>
                  <h1 className="font-['InterTight'] text-[14px] leading-[16px] text-center mt-5">Already have an account <button className='cursor-pointer' onClick={()=>{router.push("/login")}}> <span className='text-black font-medium font-bold'>Sign in?</span></button></h1>
                </div>
      </div>
    </div>
  )
}

export default page;