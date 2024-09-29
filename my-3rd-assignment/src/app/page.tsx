'use client'
import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
export  default function Home(){
  const route = useRouter()
   return(
    <>
    <div>
    
      {/* Navbar Section  */}

      <ul className="flex gap-3 bg-orange-400 justify-end pr-3 p-2">
        <li> <Link href='/'>Home</Link></li>
        <li> <Link href='/about'>About</Link></li>
        <li> <Link href='/contact'>Contact</Link></li>
        <li> <Link href='/footer'>Footer</Link></li>
      </ul>
    <h1 className='p-5 text-yellow-600 text-center text-4xl'>Hey Everyone! This is my Next-JS Web Page</h1>
    
    </div>

    {/* Navigattion Section */}
       
      <div className="h-screen flex justify-center items-center">
  <div className="flex flex-row space-x-4">
    <button
      className="p-4 bg-blue-700 text-white w-48 m-4 rounded-lg hover:bg-blue-500 transition duration-300"
      onClick={() => route.push('/')}
    >
      Go to Home
    </button>

    <button
      className="p-4 bg-green-700 text-white w-48 m-4 rounded-lg hover:bg-green-500 transition duration-300"
      onClick={() => route.push('/about')}
    >
      Go to About
    </button>

    <button
      className="p-4 bg-red-700 text-white w-48 m-4 rounded-lg hover:bg-red-500 transition duration-300"
      onClick={() => route.push('/contact')}
    >
      Go to Contact
    </button>

    <button
      className="p-4 bg-yellow-700 text-white w-48 m-4 rounded-lg hover:bg-yellow-500 transition duration-300 mr-10"
      onClick={() => route.push('/footer')}
    >
      Go to Footer
    </button>
  </div>
</div>

    </>
   )
  
}