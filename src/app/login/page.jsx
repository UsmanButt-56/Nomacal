"use client";
import React,{useState} from 'react'
import Image from 'next/image';
import Inputname from '@/components/Inputname/Inputname';
import LongButton from '@/components/button/LongButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

function page() {
  const [email , setEmail] = useState(" ");
  const [password , setPassword] = useState(" ");
  const router = useRouter();
  const onhandlelogin = async (e) =>
  {
    e.preventDefault();
    try
    {
      await signInWithEmailAndPassword(auth , email , password);
      toast.success("Login successful");
      router.push('/');
    }
    catch(error)
    {
      console.log("Error is ",error);
      toast.error("Invalid email or password!");
    }
  }
  return (
    <div className='w-full h-screen flex'>
      <div className='hidden xl:w-[45%] bg-black xl:flex justify-center items-center'>
               {/* <div className=''> */}
                 <Image src="/assets/logo.png" alt="logo" width={470} height={470} />
               {/* </div> */}
      </div>
      <div className='w-full xl:w-[55%] p-5 lg:p-10 2xl:p-15 bg-white'>
        <h1 className="font-['InterTight'] font-medium text-[28px] leading-[30px] md:text-[48px] md:leading-[44px] lg:text-[52px] lg:leading-[60px] 2xl:text-[72px] 2xl:leading-[100%]">Welcome back to nomacal</h1>
        <h1 className="font-['InterTight'] text-[18px] leading-[20px]">Please enter your details...</h1>

        <form className='my-5 xl:my-10 2xl:my-20' onSubmit={onhandlelogin}>
            <div className=''>
                <Inputname label="Email address" type="email" value={email} placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} />
                <Inputname label="Password" type="password" value={password} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)}  />

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
                  <button
                    type="submit"
                    //disabled={loading}
                    className="w-full border-1 border-black h-[40px] lg:h-[60px] bg-black text-white flex justify-center items-center rounded-full cursor-pointer mt-5"
                  >
                Login
              </button>
                    {/* <LongButton label="Login"        bgColor='bg-black' textColor='white'/> */}
                    <LongButton label="Back to home" bgColor='bg-white' textColor='black'/>
                </div>

                {/* <div className='flex items-center justify-center w-full'>
                  <h1 className="font-['InterTight'] text-[14px] leading-[16px] text-center mt-5">Don't have an account?<button className='cursor-pointer' onClick={() => router.push('/signup')}> <span className='text-black font-medium font-bold'>Sign up</span></button></h1>
                </div> */}

            </div>
        </form>
                <div className='flex items-center justify-center w-full'>
                  <h1 className="font-['InterTight'] text-[14px] leading-[16px] text-center mt-5">Don't have an account <button className='cursor-pointer' onClick={() => router.push('/signup')}> <span className='text-black font-medium font-bold'>Sign up?</span></button></h1>
                </div>
      </div>
    </div>
  )
}

export default page;