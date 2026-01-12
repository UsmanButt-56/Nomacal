import React from 'react'
import Why_Borrow from './Why_Borrow';
import Secure from '../../Common/Secure';
import Custody from '../../Common/Custody';
import TabText from '../../Common/TabText';
import { Our_Film as Our_Film_Data } from '../../../../data/staticData';

function Our_Film() {
  return (
    <div className=''>
      <TabText data= {Our_Film_Data} />
      <Why_Borrow />
      <Secure />
      <Custody image="/assets/custody.png" bgColor="bg-[#E6E6E6]"/>
    </div>
  )
}

export default Our_Film;