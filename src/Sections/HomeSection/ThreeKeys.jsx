import React from 'react'
import { ThreeKeysData } from '../../data/staticData';
import Image from 'next/image';
function ThreeKeys() {
    return (
        <div className='bg-white py-[7.292vw]'>
        <div className='max-w-[1400px] mx-auto my-10 lg:my-20 px-5 lg:px-5'>
            <div className="flex flex-col md:flex-row md:justify-between items-center space-y-3">
                <div className=''>
                    <h1 className="font-['GreatVibes'] font-regular text-[60px] lg:text-[120px] text-[#000000] leading-10 lg:leading-23">Three <span className="font-['InterTight'] font-semibold text-[36px] lg:text-[72px] text-[#000000]">Keys <br /> One Trustless Vault</span></h1>
                </div>
                <div className='w-36 h-12 bg-yellow-500 text-black flex items-center justify-center rounded-full'>
                    <button>Get loan now</button>
                </div>
            </div>
            <h1 className="font-['InterTight'] font-semibold text-[22px] lg:text-[32px] text-[#000000]">Why this is optimal for you:</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
            {
                ThreeKeysData.map((item) => (
                    <div className='flex flex-col border-b-1 border-[#0000000F] border-opacity-6 gap-3 lg:gap-5 my-3 lg:my-5' key={item.id}>
                        <h1 className="font-['InterTight'] font-semibold text-[18px] lg:text-[24px] text-[#000000]">{item.title}</h1>
                        <p className="font-['InterTight'] font-regular text-[12px] lg:text-[16px] text-[#000000] opacity-50 mb-10">{item.desc}</p>
                    </div>
                ))
            }
            </div>
            <div className='flex items-center justify-center'>
                <Image src={`/assets/Threekeys.jpg`} width={500} height={500} alt="three-keys-image" />
            </div>
            </div>
            <p className="font-['InterTight'] font-regular text-[16px] text-[#000000] opacity-50">Building upon the robust security framework of Nomacal's 3-key custody model, Theya enhances this system by providing a user- centric, collaborative custody solution. Theya's 2-of-3 multisig vaults ensure that no single entity can unilaterally access or move your Bitcoin, requiring at least two parties to authorize any transaction. This setup not only decentralizes control but also mitigates risks associated with single points of failure. Moreover, Theya's platform supports seamless integration with various hardware wallets and offers features like sovereign and assisted recovery options, ensuring that users maintain control and access to their assets even in unforeseen circumstances. By incorporating Theya's advanced multisig technology, Nomacal fortifies its commitment to providing secure, transparent, and user-empowered Bitcoin lending solutions.</p>
        </div>
        </div>
    )
}

export default ThreeKeys;