import React from 'react'
import { Team as TeamData } from '@/data/staticData';
import Secure from '../../Common/Secure';
import Custody from '../../Common/Custody';
import TabText from '../../Common/TabText';
function Team() {
  return (
    <div className=''>
      <TabText data= {TeamData} />
      <Secure />
      <Custody image="/assets/Enterprise-custody.png" bgColor="bg-[#F9F7F2]"/>
    </div>
  )
}

export default Team;