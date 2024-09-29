"use client"
import React from 'react'
import { useRouter } from "next/navigation";
const Footer = () => {
    const route = useRouter()
  return (
    <>
    <div>
        <h1 className='p-5 text-pink-600 text-center text-4xl'>Hey Everyone! This is my Footer Section</h1>
    </div>

    <div className="flex flex-row space-x-4 justify-center">
    <button
      className="p-4 bg-pink-500 text-white w-48 m-4 rounded-lg hover:bg-pink-300 transition duration-300"
      onClick={() => route.push('/')}
    >
      Go to Home
    </button>
    </div>
    </>
  )
}

export default Footer