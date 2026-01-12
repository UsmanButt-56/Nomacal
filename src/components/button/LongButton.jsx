import React from 'react'

function LongButton({label , bgColor , textColor , type="button"}) {
  return (
    <div type={type} className={`w-full border-1 border-black h-[40px] lg:h-[60px] ${bgColor} flex justify-center items-center rounded-full cursor-pointer mt-5`}>
      <h1 className={`${textColor}`}>{label}</h1>
    </div>
  )
}

export default LongButton;