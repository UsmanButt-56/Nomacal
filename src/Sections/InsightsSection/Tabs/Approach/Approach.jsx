import React from 'react'
import { Approach as Approach_data } from '../../../../data/staticData';
import Secure from '../../Common/Secure';
import Custody from '../../Common/Custody';
import TabText from '../../Common/TabText';
function Approach() {
  return (
   <div className=''>
      <TabText data= {Approach_data} />
      <Secure />
      <Custody image="/assets/Enterprise-custody.png" bgColor="bg-[#F9F7F2]"/>
    </div>
  )
}

export default Approach;