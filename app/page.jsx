import React from 'react';
import Userpost from '@components/userpost';
import ArrowImage from 'public/uparrow.png';
import Image from 'node_modules/next/image';

const text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero aliquet, tristique mauris at, semper lorem. Nunc efficitur pulvinar massa, id imperdiet odio pulvinar ut. Curabitur mattis orci eu magna imperdiet tincidunt. Aliquam nibh mauris, iaculis sit amet blandit id, luctus in est. Ut vitae turpis diam."

const text2="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet neque et augue mattis pellentesque eget ac augue. Phasellus ac nunc venenatis, ullamcorper nunc eu, dictum diam. Duis eleifend, metus ac pharetra consequat, sapien diam dictum tortor, et ultricies nunc tellus id dolor. Aliquam accumsan porta pellentesque. Proin quis nibh arcu."

function GoToLatest(){
  return(
    <>
    <div>
        <a href=".\" className='fixed top-0 max-w-fit w-2/12 max-h-16 px-5 pb-5 mx-4 rounded-b-lg bg-white shadow-md'>
          <div className=' items-center pt-2.5 w-max'>
            <Image src={ArrowImage} height={40} width={40} className='hover:hue-rotate-60'></Image>  
        </div>
        </a>
    </div>
    </>
  )
}

function searchBar(){
  return(
<form className="max-w-md mx-auto">   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
  )
}


const page = () => {
  return (
    <div className=' from-emerald-400 via-amber-300 to-orange-400 bg-gradient-to-r'>
      {GoToLatest()}
    <div className='flex flex-col items-center justify-center'>
    <div className='flex min-h-screen'>
    
    <div className='flex flex-col my-3 py-5 px-20  max-w-3xl'>
    <Userpost user="User1" text={text2}></Userpost>
    <Userpost user="User2" text={text1}></Userpost>
    <Userpost user="User3" text={text2}></Userpost>
    <Userpost user="User4" text={text1}></Userpost>
    <Userpost user="User5" text={text2}></Userpost>
    <Userpost user="User6" text={text1}></Userpost>
    <Userpost user="User7" text={text2}></Userpost>
    </div>
    </div>
    </div>
    </div>
  )
}

export default page