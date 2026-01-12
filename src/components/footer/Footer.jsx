import React from 'react'

function page() {
  const Footer = 
  [
    { id : 1 , title : "Products" , links : ["Home", "Insight", "About us", "Contact Us", "Blog"]},
    { id : 2 , title : "Socials" , links : ["Facebook", "Twitter", "Linkedin"]},
  ]
  return (
    <div className='bg-black pt-10 lg:pt-20 border-b-1 border-[#FFFFFF33] border-opacity-20'>
      <div className='max-w-[1400px] mx-auto px-5 xl:px-0'>
        <div className="flex flex-col text-center w-full justify-center items-center text-white">
          <h1 className='font-[InterTight] font-semibold text-[32px] text-[#FFFFFF] text-center'>New to Nomacal?</h1>
          <p className='py-3 lg:py-5 border-opacity-20 font-[InterTight] font-regular text-[16px] lg:text-[24px]'>Take a look around—browse our loan options, explore how it works, and see how easy it is to use your Bitcoin without selling. Whether you're curious or ready to start, everything you need is just a click away.</p>
        </div>
        {/* Start Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] w-full border-t-1 border-b-1 border-[#FFFFFF33] border-opacity-20 px-0 pe-10 lg:px-0 gap-10 py-10">
          <div className='text-white flex flex-col items-center lg:items-start'>
            <h1 className='font-[GreatVibes] font-regular text-[72px]'>Nomacal</h1>
            <p className='font-[InterTight] font-medium text-[16px]'>Nomacal@gmail.com</p>
            <p className='font-[InterTight] font-medium text-[16px]'>+1 201-690-7206</p>
          </div>
          <div className='text-white flex flex-col md:flex-row items-center justify-center gap-20 md:space-between lg:justify-between space-y-10'>
              <div>
                <h1>Products</h1>
                <ul className='mt-5'>
                  <li>Home</li>
                  <li>Insight</li>
                  <li>About us</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h1>Products</h1>
                <ul className='mt-5'>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Linkedin</li>
                </ul>
              </div>
          </div>
        </div>
        {/* End Section */}
        <div className='flex flex-col items-center lg:flex-row lg:justify-between my-5 font-[InterTight] font-medium text-[16px] text-[#FFFFFF] opacity-50'>
            <div>
              <p>© 2024 - 2025 Nomacal</p>
            </div>
            <div>
              <p>Terms & Conditions</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default page;