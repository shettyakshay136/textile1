import React from 'react';
import './globals.css';
import Link from 'next/link';

import { Cinzel_Decorative, Poppins } from 'next/font/google';


const PoppinsFont = Poppins( 
  {
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
  }
)
const cinzelFont = Cinzel_Decorative( 
  {
    subsets: ['latin'],
    weight: ['400'],
  }
)

const Page = () => {
  return (
    <main id='home' className='overflow-x-hidden'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='mx-auto'>
         <img className='min-[250px]:w-auto' src='vl.png' alt="My Image" />
         <h1 className={`${cinzelFont.className} text-white  text-center text-[65.8px] ml-[-20px] relative lg:text-[65.8px] sm:text-[56px] min-[250px]:text-[36px]`}>versuitality</h1>
      
        </div>
        <div className={`${PoppinsFont.className} flex gap-5 pt-1 text-[20px] lg:text-[20px] md:text-[15px] sm:text-[13px] min-[250px]:text-[13px]`}>
          <Link href='/staff'>
          <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Staff</button>

          </Link>
          
          
          <button className=' rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Quality Check</button>
          <button className=' rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Master</button>

         </div>


      </div>

    </main>
    
  )
}

export default Page