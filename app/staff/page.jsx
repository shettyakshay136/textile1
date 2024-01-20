import React from 'react';
import styles from './staff.module.css'
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



  

const Login = () => {




  return (
    <div className={styles.container}>
      <div className='bg-pattern bg-cover h-screen'>
        <div className='h-screen flex items-center justify-center'>
          <div className="bg-[#FBFBFB] p-8 rounded shadow-md w-96 bg-opacity-15 backdrop-blur-[2px]">
            <div className='mx-auto flex py-2.5 ml-[-10px]'>
              <img className=' max-w-[150px] max-h-[150px] mt-[-20px]' src='vl.png' alt="My Image" />
              <h1 className={`${cinzelFont.className} text-white  text-center text-[25.8px] ml-[-20px] relative lg:text-[25.8px] mg:text-[36px] min-[250px]:text-[30px]`}>versuitality</h1>
            </div>
            <h2 className= {`${PoppinsFont.className} text-white text-2xl font-extralight mt-[13px] `}>Login</h2>
              <form>
                <div className="py-2">
                  <label htmlFor="username" className={`${PoppinsFont.className} block text-[#FFFAFA] text-sm font-medium mb-2 `}>Username</label>
                  <input type="text" id="username" name="username" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
               <div className="py-2">
                  <label htmlFor="password" className={`${PoppinsFont.className} block text-[#FFFAFA] text-sm font-medium mb-2 `}>Password</label>
                  <input type="password" id="password" name="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className='py-5'>
                  <Link href='/admin'>    
                         
                     <button type="submit" className="rounded-md bg-purple-700 text-white px-4 py-2  hover:bg-opacity-80 transition duration-300 ease-in-out backdrop-blur-md backdrop-opacity-30">
                         Login
                     </button>
                  
                  </Link>
                  
                

                </div>
              
              </form>
          </div>
        </div>
      </div>
      

    </div>
      
        
        
        
        
        
        
  )
}

export default Login