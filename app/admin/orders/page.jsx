import React from 'react'
import styles from './orders.module.css'


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
            <div id='header' className=' flex justify-between bg-[#F0F8FF] shadow-xl p-5 rounded-br-[45px] lg:rounded-bl-[0px] md:rounded-bl-[0px] min-[250px]:rounded-bl-[45px] min-[250px]:items-center min-[250px]:flex-col sm:flex-col md:flex-row lg:flex-row'>
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
                        <button className='bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>change Password</button>
                        <button className='bg-red-400 text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>Logout</button>


                    </div>
              
              </div>
            </div>


          <div id='flex' className='flex items-start lg:items-start md:items-start min-[250px]:items-center relative lg:flex-row md:flex-row min-[250px]:flex-col pt-0 pl-0 pr-0 lg:pt-0 lg:pl-0 lg:pr-0 md:pt-0 md:pl-0 md:pr-0 min-[250px]:pt-5 min-[250px]:pl-7 min-[250px]:pr-7'>    
            <div className='max-w-[500px] h-full bg-[#F0F8FF] rounded-r-[45px] p-1 shadow-xl lg:rounded-r-[45px] lg:rounded-l-[0px] lg:max-w-[500px] md:max-w-[500px] lg:p-1 md:rounded-r-[45px] md:rounded-l-[0px] md:p-2 min-[250px]:max-w-[400px] min-[250px]:p-4  min-[250px]:rounded-r-[25px] min-[250px]:rounded-l-[25px]'>
              <h1 className=' p-3 text-[22.8px]'>Site Administration</h1>
              <div className='p-5'>
                <div id='orders' className=''>
                  <div className='shadow-lg bg-white rounded-[20px] px-2 py-2 text-center'>
                    <h1 className=''>ORDER MANAGEMENT</h1>
                  </div>
                  <div className='flex pl-7  pt-6  pb-5 pr-7 items-center gap-[6.8rem] lg:gap-[6.8rem] md:gap-[6.8rem] min-[250px]:gap-[5.1rem]'>
                    <h1 className='text-[18.8px] items-center'>Order:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                  <div className='flex pl-7 pt-5 pb-5 pr-7 items-center gap-[2.2rem] lg:gap-[2.2rem] md:gap-[2.2rem] min-[250px]:gap-[0.5rem]'>
                    <h1 className='text-[18.8px] items-center'>Measurements:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
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
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                  <div className='flex items-center pl-7 pt-5 pb-4 pr-7  gap-[6.0rem] lg:gap-[6.0rem] md:gap-[6.0rem] min-[250px]:gap-[4.5rem]'>
                    <h1 className='text-[18.8px] items-center'>Groups:</h1>
                    <div className='flex gap-[1.5rem] text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Add</button>
                      <button className='rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>change</button>
                    </div>
                  </div>
                </div>



              </div>
            </div>
            <div id='orders PAGE'className='relative p-7 w-[1000px] lg:w-[1000px] md:w-[500px] min-[250px]:w-[500px]'>
              <div className=' bg-[#F0F8FF] flex-col p-4 rounded-[20px] shadow-xl'>
                <div className='items-center flex justify-center'>
                  <div className='shadow-lg bg-white rounded-[20px] w-5/12 lg:w-5/12 md:w-5/12 min-[250px]:w-5/12 px-2 py-2 text-center'>
                    <h1>Orders</h1>
                  </div>

                </div>
                <div className='grid grid-cols-2 gap-8 pt-5 pl-7 pr-7 pb-5 lg:grid-cols-2 md:grid-cols-1 min-[240px]:grid-cols-1'>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='field1' className=''>Order name:</label>
                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='field2'>Customer email:</label>
                    <input type='text' id='field2' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between  '>
                    <label htmlFor='field3'>Customer name:</label>
                    <input type='text' id='field3' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='field4' className=''>Customer phone:</label>
                    <input type='text' id='field4' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='dateField'>Order recieved date:</label>
                    <input type='date' id='dateField' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='dateField'>Order due date:</label>
                    <input type='date' id='dateField' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='numberField' className=''>Order priorty:</label>
                    <input type='number' id='numberField' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='selectorField' className=''>Order status:</label>
                    <select id='selectorField' className='border-b border-black outline-none bg-transparent p-1'>
                      <option value='option1'>Recieved</option>
                      <option value='option2'>processing</option>
                      <option value='option3'>Cutting Started</option>
                      <option value='option3'>Stitching Started</option>
                      <option value='option3'>Order Ready</option>
                      <option value='option3'>Quality Checked Passed</option>
                      <option value='option3'>Quality Checked Failed</option>
                      <option value='option3'>Delivered</option>
                    </select>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label htmlFor='numberField' className=''>Number of order done:</label>
                    <input type='number' id='numberField' className='border-b border-black outline-none bg-transparent p-1' />
                  </div>
                  
                </div>
                <div className='items-center flex lg:flex-row md:flex-row min-[250px]:flex-col  justify-center gap-5 p-3 text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                  <button className='w-fit lg:w-fit md:w-fit min-[250px]:w-full rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>SAVE</button>
                  <button className='w-fit lg:w-fit md:w-fit min-[250px]:w-full rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Save and Add Another</button>
                  <button className='w-fit lg:w-fit md:w-fit min-[250px]:w-full rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>Save and Continue Editing</button>
                </div>
              </div>

            </div>

          

          </div>


      </div>

    </div>
  )
}

export default page




