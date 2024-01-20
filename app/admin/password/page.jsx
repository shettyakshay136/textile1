import React from 'react'
import styles from './password.module.css'


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
            <div id='header' className=' flex justify-between bg-[#F0F8FF] shadow-xl p-5 rounded-br-[45px] lg:rounded-bl-[0px] md:rounded-bl-[45px] min-[250px]:rounded-bl-[45px] min-[250px]:items-center min-[250px]:flex-col sm:flex-col md:flex-row lg:flex-row'>
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
                        <button className='bg-red-400 text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>Logout</button>


                    </div>
              
              </div>
            </div>


          <div id='flex' className='flex items-start lg:items-start md:items-center min-[250px]:items-center relative lg:flex-row md:flex-row min-[250px]:flex-col pt-0 pl-0 pr-0 lg:pt-0 lg:pl-0 lg:pr-0 md:pt-0 md:pl-0 md:pr-0 min-[250px]:pt-5 min-[250px]:pl-7 min-[250px]:pr-7'>    
            <div className='block lg:block md:hidden min-[250px]:hidden max-w-[500px] bg-[#F0F8FF] rounded-r-[45px] p-1 shadow-xl lg:rounded-r-[45px] lg:rounded-l-[0px] lg:max-w-[500px] md:max-w-[500px] lg:p-1 md:rounded-r-[45px] md:rounded-l-[0px] md:p-2 min-[250px]:max-w-[400px] min-[250px]:p-4  min-[250px]:rounded-r-[25px] min-[250px]:rounded-l-[25px]'>
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
            <div id='orders PAGE'className='place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center relative p-7 w-[900px] lg:w-[900px] md:w-[900px] min-[250px]:w-[500px]'>

                <div className=' bg-[#F0F8FF] flex-col p-4 rounded-[20px] shadow-xl'>
                    <div className='items-center flex flex-col justify-center'>
                        <div className='items-center flex justify-center shadow-lg bg-white rounded-[20px] w-5/12 lg:w-5/12 md:w-5/12 min-[250px]:w-5/12 px-2 py-2 text-center'>
                            <h1>Password change</h1>
                        </div>
                    </div>
                    <div>
                        <h2 className='pt-5 pl-5 pr-5 pb-2'>
                            Please enter your old password, for security’s sake, and then enter your new password twice so we can verify you typed it in correctly.
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 pt-2 pl-6 pr-6 pb-1'>
                        <div className='flex lg:flex-row md:flex-row min-[250px]:flex-col items-start gap-[10.5rem] lg:gap-[10.5rem] md:gap-[10.5rem] min-[250px]:gap-[1rem] p-2 pb-2'>
                            <label htmlFor='field1' className=''>Old Password</label>
                            <div className='place-items-start'>
                                <input type='text' id='field1' className='rounded-[5px] border border-black outline-none bg-transparent  p-1' />
                                <h6 className='text-[15px]'>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</h6>
                            </div>
                            
                        </div>
                        <div className='flex lg:flex-row md:flex-row min-[250px]:flex-col items-start gap-[10.3rem] p-2 pb-2 lg:gap-[10rem] md:gap-[10rem] min-[250px]:gap-[1rem]'>
                            <label htmlFor='field1' className=''>New Password:</label>
                            <div className=''>
                                <input type='text' id='field1' className='rounded-[5px] border border-black outline-none bg-transparent  p-1' />
                                <h6 className='text-[15px]'>Your password can’t be too similar to your other personal information.</h6>
                                <h6 className='text-[15px]'>Your password must contain at least 8 characters.</h6>
                                <h6 className='text-[15px]'>Your password can’t be a commonly used password.</h6>
                                <h6 className='text-[15px]'>Your password can’t be entirely numeric.</h6>
                            </div>
                        </div>
                        <div className='flex lg:flex-row md:flex-row min-[250px]:flex-col items-start gap-[4.1rem] p-2 pb-2 lg:gap-[4.1rem] md:gap-[4.2rem] min-[250px]:gap-[1rem]'>
                            <label htmlFor='field1' className=''>New Password confirmation:</label>
                            <div className=''>
                                <input type='text' id='field1' className='rounded-[5px] border border-black outline-none bg-transparent  p-1' />
                                <h4 className='text-[15px]'>Enter the same password as before, for verification.</h4>
                            </div>
                        </div>
                        <div className='items-center gap-5 pt-1 text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] min-[250px]:text-[13px]'>
                            <button className='w-fit lg:w-fit md:w-fit min-[250px]:w-full rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30'>CHANGE MY PASSWORD</button>
                        </div>


                    </div>
                </div>
                
                    
                    
                    
            </div>
            

          

          </div>


      </div>

    </div>
  )
}

export default page







