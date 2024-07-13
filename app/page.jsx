'use client';
import React from 'react'

var text="text";

function header(){
  const changePage = (url)=>{
    window.location.href = url;
  }
  return(
    <>
    <header class='w-full max-h-24 px-10 py-3 pb-5 mx-auto rounded-b-lg bg-white shadow-xl'>
        <div class='leading-3 mx-auto space-y-3'>
          <h1 class="text-2xl font-bold text-black">Home Page</h1>
          <button onClick={() => {changePage("/about")}} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          About
          </button>
        </div>
    </header>
    </>

  )
}

const page = () => {
  return (
    <>
    {header()}
    </>
  )
}

export default page