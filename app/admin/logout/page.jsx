import React from 'react'
import styles from './logout.module.css'

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

const page = () => {
  return (
    <div className={styles.container1}>
        <div className='bg-[#F8F8FF] h-screen'>
            <div className='items-center flex justify-center bg-[#F0F8FF] shadow-xl p-5 rounded-br-[45px] lg:rounded-bl-[45px] md:rounded-bl-[45px] min-[250px]:rounded-bl-[45px]'>
                <div className='items-center flex relative'>
                    <img className=' max-w-[150px] max-h-[150px]' src='/vl.png' alt="My Image" />
                    <h1 className={`${cinzelFont.className} text-black text-[25.8px] ml-[-20px] relative lg:text-[25.8px] md:text-[20px] min-[250px]:text-[20px]`}>versuitality</h1>
                </div>
                
              
            </div>
            <div className='bg-[#F0F8FF] m-[50px] rounded-[45px] shadow-xl'>
                    <div className=' p-[50px] w-full  h-2/4'>
                        <h1 className='p-2 text-[20px]'>Logged Out</h1>
                        <h2 className='p-2'>Thanks for spending some quality time with the web site today.</h2>
                        <div className='items-center gap-5 p-5 text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                            <button className='w-fit lg:w-fit md:w-fit min-[250px]:w-full rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Log in Again</button>
                        </div>


                    </div>
                    
                

            </div>


          
        

          

        </div>


    </div>
  )
}

export default page




