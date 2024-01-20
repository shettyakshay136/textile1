import React from 'react'
import styles from './measures.module.css'


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
                        <button className='bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>change Password</button>
                        <button className='bg-red-400 text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30 rounded-md'>Logout</button>


                    </div>
              
              </div>
            </div>


          <div id='flex' className='flex items-start lg:items-start md:items-start min-[250px]:items-center relative lg:flex-row md:flex-row min-[250px]:flex-col pt-0 pl-0 pr-0 lg:pt-0 lg:pl-0 lg:pr-0 md:pt-0 md:pl-0 md:pr-0 min-[250px]:pt-5 min-[250px]:pl-7 min-[250px]:pr-7'>    
            <div className='sticky top-0 block lg:block lg:sticky lg:top-0 md:hidden min-[250px]:hidden max-w-[500px] h-screen bg-[#F0F8FF] rounded-r-[45px] p-1 shadow-xl lg:rounded-r-[45px] lg:rounded-l-[0px] lg:max-w-[500px] md:max-w-[500px] lg:p-1 md:rounded-r-[45px] md:rounded-l-[0px] md:p-2 min-[250px]:max-w-[400px] min-[250px]:p-4  min-[250px]:rounded-r-[25px] min-[250px]:rounded-l-[25px]'>
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
            <div id='orders PAGE'className='relative p-7 w-[1000px] lg:w-[1000px] md:w-[1000px] min-[250px]:w-[500px]'>

                <div className=' bg-[#F0F8FF] flex-col p-4 rounded-[20px] shadow-xl'>
                    <div className='p-5 text-[22.8px]'>
                        <h1>Add mesurement</h1>
                    </div>
                
                    <div className='items-center flex flex-col justify-center'>
                        <div className='items-center flex justify-center shadow-lg bg-white rounded-[20px] w-5/12 lg:w-5/12 md:w-5/12 min-[250px]:w-5/12 px-2 py-2 text-center'>
                            <h1>Customer Details</h1>
                        </div>
                        <div className='flex flex-row w-full p-5'>
                            <label htmlFor='selectorField' className=''>Order:</label>
                            <select id='selectorField' className='border-b w-full  border-black outline-none bg-transparent p-1'>
                            </select>
                        </div>
                    </div>
                    <div className='items-center flex flex-col justify-center pt-5'>
                        <div className='items-center flex justify-center shadow-lg bg-white rounded-[20px] w-7/12 lg:w-7/12 md:w-7/12 min-[250px]:w-7/12 px-2 py-2 text-center'>
                            <h1>Blazer/Jacket Mesurement</h1>
                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 justify-center grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[240px]:grid-cols-1 place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] max-h-[200px]' src="/12.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Front length:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                <img className='max-w-[150px] h-[160px]' src="/2.bmp" alt="" />


                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Shoulder:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/3.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Sleeves:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/4.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Chest:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/5.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Waist:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/6.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Hip:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Crossfront:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Crossfront:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col '>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Crossfront:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            

                  
                  
                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 pr-10 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[240px]:grid-cols-1 place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <div className='w-3/6 lg:w-3/6 md:w-3/6 min-[250px]:w-full flex flex-col items-start justify-between pb-5'>
                                <label htmlFor='selectorField' className=''>Slits:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>None</option>
                                    <option value='option2'>Side</option>
                                    <option value='option3'>Center</option>
                      
                                </select>
                            </div>
                            <div className='w-4/6 lg:w-4/6 md:w-4/6 min-[250px]:w-full flex flex-col  justify-between pb-5'>
                                <label htmlFor='numberField' className=''>Jacket order quantity:</label>
                                <input type='number' id='numberField' className='border-b border-black outline-none bg-transparent p-1' />
                            </div>
                            <div className="w-full flex flex-col items-start justify-between pb-5">
                                <h2>Blazer sample cloth image:</h2>
                                <label htmlFor="fileInput" className="cursor-pointer rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30">Choose File
                                </label>
                                <input id="fileInput" type="file" className="hidden" />
                            </div>


                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 pr-10 flex flex-row items-start justify-between place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <label htmlFor='field4' className=''>Blazer Jacket Additional Information:</label>
                            <input type='text' id='field4' className='border rounded-[25px] border-black outline-none bg-transparent p-1 w-full h-24' />
                        </div>
                        
                        
                    </div>

                    <div className='items-center flex flex-col justify-center pt-5'>
                        <div className='items-center flex justify-center shadow-lg bg-white rounded-[20px] w-7/12 lg:w-7/12 md:w-7/12 min-[250px]:w-7/12 px-2 py-2 text-center'>
                            <h1>Kurta/Shirts Mesurement</h1>
                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 justify-center grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[240px]:grid-cols-1  place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] max-h-[200px]' src="/12.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta front length:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                <img className='max-w-[150px] h-[160px]' src="/2.bmp" alt="" />


                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta shoulder:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/3.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta sleeves:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/4.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta chest:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/5.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta waist:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/6.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta hip:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta sleeves opening:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Kurta biceps:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            

                  
                  
                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 pr-10 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[240px]:grid-cols-1  place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Kurta Cut Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Slime 4</option>
                                    <option value='option2'>M fit 5</option>
                                    <option value='option3'>Loose 6</option>
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Kurta Style Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Square slit</option>
                                    <option value='option2'>M fit 5</option>
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Kurta Neck Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Regulat</option>
                                    <option value='option2'>Short</option>
                                    <option value='option2'>Long</option>
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Kurta Collor Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>2</option>
                                    <option value='option2'>2.5</option>
                                    <option value='option2'>2.75</option>
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5 '>
                                <label htmlFor='numberField' className=''>Kurta order quantity:</label>
                                <input type='number' id='numberField' className='border-b w-full border-black outline-none bg-transparent p-1' />
                            </div>
                            <div className="w-full flex flex-col items-start justify-between p-5 ">
                                <h2>Kurta sample cloth image:</h2>
                                <label htmlFor="fileInput" className="cursor-pointer rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30">Choose File
                                </label>
                                <input id="fileInput" type="file" className="hidden" />
                            </div>


                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 flex flex-row items-start justify-between'>
                            <label htmlFor='field4' className=''>Blazer Jacket Additional Information:</label>
                            <input type='text' id='field4' className='border rounded-[25px] border-black outline-none bg-transparent p-1 w-full h-24' />
                        </div>
                        
                        
                    </div>
                    <div className='items-center flex flex-col justify-center pt-5'>
                        <div className='items-center flex justify-center shadow-lg bg-white rounded-[20px] w-7/12 lg:w-7/12 md:w-7/12 min-[250px]:w-7/12 px-2 py-2 text-center'>
                            <h1>Trouser Mesurement</h1>
                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 justify-center grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[240px]:grid-cols-1  place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] max-h-[200px]' src="/12.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser length:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                <img className='max-w-[150px] h-[160px]' src="/2.bmp" alt="" />


                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser inseam:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/3.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser bottom:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/4.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser knee:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/5.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser thigh:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/6.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser waist:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser hips:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Trouser rounding:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            <div className='flex flex-col pb-5'>
                                <div className=''>
                                    <img className='max-w-[150px] h-[160px]' src="/7.bmp" alt="" />

                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <label htmlFor='field1' className=''>Front Down:</label>
                                    <input type='text' id='field1' className='border-b border-black outline-none bg-transparent  p-1' />
                                </div>

                            </div>
                            

                  
                  
                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[240px]:grid-cols-1  place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Rise Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>High</option>
                                    <option value='option2'>Medium</option>
                                    <option value='option3'>Low</option>
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Pleat Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Flat Front</option>
                                    <option value='option2'>1 Pleat</option>
                                    <option value='option3'>2 Pleat</option>
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Belt Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Cut belt</option>
                                    <option value='option2'>Ext. Belt</option>
                                    
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Belt Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Cross</option>
                                    <option value='option2'>Side</option>
                                    
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Watch Pocket Choices:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>Yes</option>
                                    <option value='option2'>No</option>
                                    
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Watch Pocket Number:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>1</option>
                                    <option value='option2'>2</option>
                                    
                      
                                </select>
                            </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='selectorField' className=''>Mobile Pockets:</label>
                                <select id='selectorField' className='w-full border-b border-black outline-none bg-transparent p-1'>
                                    <option value='option1'>yes</option>
                                    <option value='option2'>No</option>
                                    
                      
                                </select>
                            </div>
                            <div className=' w-full flex flex-col items-start justify-between p-5'>
                                    <label htmlFor='field1' className=''>PocketSize:</label>
                                    <input type='text' id='field1' className='border-b w-full border-black outline-none bg-transparent  p-1' />
                                </div>
                            <div className='w-full flex flex-col items-start justify-between p-5'>
                                <label htmlFor='numberField' className=''>Trouser order quantity:</label>
                                <input type='number' id='numberField' className='border-b w-full border-black outline-none bg-transparent p-1' />
                            </div>
                            <div className="w-full flex flex-col items-start justify-between p-5">
                                <h2>Blazer sample cloth image:</h2>
                                <label htmlFor="fileInput" className="cursor-pointer rounded-md bg-[#403c6e] text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30">Choose File
                                </label>
                                <input id="fileInput" type="file" className="hidden" />
                            </div>


                        </div>
                        <div className='w-full pl-16 pt-5 pb-5 flex flex-row items-start justify-between  place-items-start lg:place-items-start md:place-items-start min-[250px]:place-items-center'>
                            <label htmlFor='field4' className=''>Blazer Jacket Additional Information:</label>
                            <input type='text' id='field4' className='border rounded-[25px] border-black outline-none bg-transparent p-1 w-full h-24' />
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







