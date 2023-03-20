import React, { useState } from 'react'
import Researchquiklinks from '../Researchquiklinks';
import {Oricdata2, Oricdata3, Oricdata4} from './Oricdata';

export default function Oric() {

    const [activeComponents, setActiveComponent] = useState('A');
    const renderComponent = () => {
      switch (activeComponents) {
        case 'A':
          return <Oricdata2/>;
        case 'B':
          return <Oricdata3/>;
        case 'C':
          return <Oricdata4/>;
        default:
          return null;

      }
    }



  return (
    <>
      <div className='flex mt-6'>
         <div className=''>
           <h1 className='mt-6 mx-5 text-5xl font-serif'>Office of Research, <br></br>Innovation & Commercialization (ORIC)</h1>
         </div>
         <div className='mx-32 mt-11'>

          <Researchquiklinks/>
        
         </div>
        
      </div>

      <div className='flex mt-6'>
        <div className='container mt-6 w-40'>
            <ul>
            <li className='mt-1 mx-3'><button onClick={() => setActiveComponent('A')} className='py-1 px-6 rounded hover:text-white hover:bg-red-900 text-lg w-48 border-2 border-red-900'><h1>Introduction</h1></button></li>
            <li className='mt-1 mx-3'><button onClick={() => setActiveComponent('B')} className='py-1 px-1 rounded hover:text-white hover:bg-red-900 text-lg w-48 border-2 border-red-900'>Vision & Mission</button></li>
            <li className='mt-1 mx-3'><button onClick={() => setActiveComponent('C')} className='py-1 px-1 rounded hover:text-white hover:bg-red-900 text-lg w-48 border-2 border-red-900'>Director's Message</button></li>
            
            </ul>

        </div>
        <div className='container mt-6 mx-20 box-content h-96 w-1/2 p-4 border-2 shadow-lg'>
            {renderComponent()}
        </div>
      </div>

    </>
  )
}
