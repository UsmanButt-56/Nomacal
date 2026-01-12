import React from 'react'
function TabText({data}) {
  return (
    <div className='max-w-[1400px] mx-auto px-3 2xl:px-0'>
        {
            data?.map((item) => (
                <p key={item.id} className='py-2 font-[InterTight] font-regular text-[14px] lg:text-[18px]'>{item.desc}</p>
            ))
        }
      </div>
  )
}

export default TabText;