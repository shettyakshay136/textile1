import React from 'react'
import styles from './admin.module.css'
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

const page = () => {
  return (
    <div className={styles.container1}>
        <div className='bg-[#F8F8FF]'>
          <div className='flex justify-between bg-[#F0F8FF] shadow-xl p-5 rounded-br-[45px] lg:rounded-bl-[0px] md:rounded-bl-[0px] min-[250px]:rounded-bl-[45px] min-[250px]:items-center min-[250px]:flex-col sm:flex-col md:flex-row lg:flex-row'>
            <div className=' items-center flex relative min-[250px]:flex-col md:flex-row lg:flex-row'>
              <img className=' max-w-[150px] max-h-[150px]' src='/vl.png' alt="My Image" />
              <h1 className={`${cinzelFont.className} text-black  text-center text-[25.8px] ml-[-20px] relative min-[250px]:ml-[0px] min-[250px]:text-center md:text-center lg:text-center lg:text-[25.8px] md:text-[20px] min-[250px]:text-[20px]`}>versuitality</h1>
            </div>
            <div className='flex gap-6 items-center min-[250px]:gap-3 md:gap-4 lg:gap-6'>
              <h1 className='text-center'>
                welcome admin
              </h1>
              <div className=' flex gap-6 text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px] min-[250px]:gap-4'>
                <button className='bg-[#403c6e]  text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>View site</button>
                <Link href='admin/password'>
                    <button className='bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>change Password</button>
                </Link>
                <Link href='admin/logout'>
                    <button className='bg-red-400 text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>Logout</button>
                </Link>


              </div>
              
            </div>
          </div>


          <div id='flex' className='flex  justify-between items-center lg-flex-row md:flex-row min-[250px]:flex-col pt-0 pl-0 pr-0 lg:pt-0 lg:pl-0 lg:pr-0 md:pt-0 md:pl-0 md:pr-0 min-[250px]:pt-5 min-[250px]:pl-7 min-[250px]:pr-7'>    
            <div className='max-w-[500px] h-[530px] bg-[#F0F8FF] relative rounded-r-[45px] p-1 shadow-xl lg:rounded-r-[45px] lg:rounded-l-[0px] lg:max-w-[500px] lg:p-1 md:rounded-r-[45px] md:rounded-l-[0px] md:p-1 md:max-w-[500px] min-[250px]:max-w-[400px] min-[250px]:p-2  min-[250px]:rounded-r-[25px] min-[250px]:rounded-l-[25px]'>
              <h1 className=' p-3 text-[22.8px]'>Site Administration</h1>
              <div className='p-5'>
                <div id='orders' className=''>
                  <div className='shadow-lg bg-white rounded-[20px] px-2 py-2 text-center'>
                    <h1 className=''>ORDER MANAGEMENT</h1>
                  </div>
                  <div className='flex pl-7 pt-6 pb-5 pr-7 items-center gap-[6.8rem] lg:gap-[6.8rem] md:gap-[6.8rem] min-[250px]:gap-[5.1rem]'>
                    <h1 className='text-[18.8px] items-center'>Order:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <Link href='admin/orders'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>

                            
                      </Link>
                      
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                  <div className='flex pl-7 pt-6 pb-5 pr-7 items-center gap-[2.2rem] lg:gap-[2.2rem] md:gap-[2.2rem] min-[250px]:gap-[0.5rem]'>
                    <h1 className='text-[18.8px] items-center'>Measurements:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <Link href='admin/measurements'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
                      </Link>
                      
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                </div>
                <div id='auth' className='pt-7'>
                  <div className='shadow-lg bg-white rounded-[20px] px-2 py-2 text-center'>
                    <h1 className=''>AUTHENTICATION AND AUTHORIZATION</h1>
                  </div>
                  <div className='flex pl-7 pt-5 pb-5 pr-7 items-center gap-[7.0rem] lg:gap-[7.0rem] md:gap-[7.0rem] min-[250px]:gap-[5.4rem]'>
                    <h1 className='text-[18.8px] items-center'>Users:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <Link href='admin/users'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
                      </Link>
                      
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                  <div className='flex items-center pl-7 pt-5 pb-4 pr-7 gap-[6.0rem] lg:gap-[6.0rem] md:gap-[6.0rem] min-[250px]:gap-[4.5rem]'>
                    <h1 className='text-[18.8px] items-center'>Groups:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                </div>



              </div>
            </div>
            <div id='recent'className='relative p-10 w-[400px] h-3/5   lg:w-[400px] md:w-[400px] min-[250px]:w-[460px]  '>
              <div className=' bg-[#F0F8FF] flex-col p-5 rounded-[20px] shadow-xl'>
                <div className='shadow-lg bg-white rounded-[20px] px-2 py-2 text-center'>
                  <h1>Recent</h1>
                </div>
                <div className='p-3'>
                  <h1>My Actions</h1>
                </div>
              </div>

            </div>

          

          </div>


        </div>

    </div>
  )
}

export default page




