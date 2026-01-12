import React from 'react'
import TabText from '../../Common/TabText';
import Custody from '../../Common/Custody';
import Secure from '../../Common/Secure';
import { Philosophy as Philosophy_Data } from '../../../../data/staticData';
function Philosophy() {
  return (
    <div className=''>
      <TabText data={Philosophy_Data}/>
      <Secure />
      <Custody image="/assets/Enterprise-custody.png" bgColor="bg-[#F9F7F2]" />
    </div>
  )
}

export default Philosophy;