'use client';
import Image from 'next/image';
import React,{useState , useRef} from 'react'
import { RxCross2 } from "react-icons/rx";

function ImageUpload({text ,label , onChange , side , desc , image}) {
    const [preview, setPreview] = useState(null);
     const inputRef = useRef(null); // ✅ FIX

    const handleImageClick = () => {
        document.getElementById(label).click();
        console.log("Clicked");
    }

     const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    if (onChange) {
      onChange(e);
    }
    

  };
   const handleRemoveImage = (e) => {
    e.stopPropagation(); // prevent opening file picker
    setPreview(null);

    // reset input
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

    return (
        <div>
            <label htmlFor="" className="font-['InterTight'] font-medium text-[18px] leading-[20px] text-[#000000]">{text}</label>
            <div className='relative cursor-pointer bg-white py-5 flex flex-col items-center justify-center rounded-[12px]' 
            onClick={handleImageClick}
            >
                 {preview ? (
                    <>
                    <div className="absolute top-2 right-2 justify-center items-center w-10 h-10 bg-[#E7E7E7] rounded-full" onClick={handleRemoveImage}>
                    <div className="flex justify-center items-center h-full">
                        <RxCross2 />
                        {/* <span className="text-white font-bold">a</span> */}
                        {/* <button className="bg-white cursor-pointer">
                            <RxCross2 />
                        </button> */}
                    </div>
                    {/* <button className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer" onClick={handleRemoveImage}>
                        <RxCross2 />
                    </button> */}
                    </div>

          <img
            src={preview}
            alt="Uploaded preview"
            width={50}
            height={50}
            className="w-[500px] h-[180px] object-cover rounded-[10px]"
          />
          </>
        ) : (
          <>
            <Image src={image} width={24} height={24} alt="upload" />
            <p>{side}</p>
            <p>{desc}</p>
            {/* <RxCross2 /> */}
          </>
        )}
            </div>
            <input
                ref={inputRef}
                type="file"
                id={label}
                name={label}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    )
}

export default ImageUpload;