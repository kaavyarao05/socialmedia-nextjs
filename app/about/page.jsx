"use client";
import React from 'react'


const page = () => {
  return (
  <>
  <button onClick={() => window.location.href ="/.."}class="absolute bg-white hover:bg-orange-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
     Go To Home
     </button>
<div class='flex items-center justify-center min-h-screen from-emerald-400 via-amber-300 to-orange-400 bg-gradient-to-r'>
    <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <div class='text-base leading-5 background bg-white max-w-md mx-auto space-y-6'>
    
            <h1 class="text-2xl font-bold text-black">Kaavya</h1>
            <p class='font-normal text-gray-700'>I am a student from St Joseph Engineering College</p>
            <p class='font-normal text-gray-700'>After using  next.js for a couple of days I learnt the general structure of this framework, how to work with tailwindcss and to use functions to reuse HTML.</p>
          
        </div>
    </div>
</div>
</>
  )
}

export default page