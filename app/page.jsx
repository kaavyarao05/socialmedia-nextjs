'use client';
import React from 'react';
import Button from '@components/Button';

const text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero aliquet, tristique mauris at, semper lorem. Nunc efficitur pulvinar massa, id imperdiet odio pulvinar ut. Curabitur mattis orci eu magna imperdiet tincidunt. Aliquam nibh mauris, iaculis sit amet blandit id, luctus in est. Ut vitae turpis diam."

const text2="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet neque et augue mattis pellentesque eget ac augue. Phasellus ac nunc venenatis, ullamcorper nunc eu, dictum diam. Duis eleifend, metus ac pharetra consequat, sapien diam dictum tortor, et ultricies nunc tellus id dolor. Aliquam accumsan porta pellentesque. Proin quis nibh arcu."

const changePage = (url)=>{
  window.location.href = url;
}

function header(){
  return(
    <>
    <header className='sticky top-0 w-full max-h-24 px-10 py-3 pb-5 mx-auto rounded-b-lg bg-white shadow-md'>
        <div className='leading-3 mx-auto space-y-3'>
          <a href=".\" class="bg-transparent hover:bg-orange-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">Go To Latest</a>
          <Button></Button>
        </div>
    </header>
    </>
  )
}

function searchBar(){
  const handleSearch=(name)=>{
    console.log(name);
    changePage("Profile/"+name);
  }
  return(
    
<form className="max-w-md mx-auto">   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button onClick={()=>{handleSearch(document.querySelector("input[type]").value)}} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

  )
}

function footer(){
  return(
    <>
    <footer className='fixed bottom-0 w-full max-h-24 px-10 py-3 pb-5 mx-auto rounded-t-lg bg-white drop-shadow-xl'>
        <div className='leading-3 mx-auto space-y-3'>
          <h1 className="text-lg font-bold text-black">Read other users posts here</h1>
        </div>
    </footer>
    </>
  )
}

function userPost(user,text){
  return(
    <>
    <div className="flex flex-col m-auto my-3 py-5 px-20 max-w-3xl bg-white rounded shadow hover:shadow-md">
      <div className>
        <button onClick={()=>{changePage("Profile/"+user)}} id="username" className=" hover:text-orange-400 text-emerald-400 font-semibold py-2 leading-10">{user}</button>
      </div>
      <div>
        <p className="text-black font-medium break-normal">{text}</p>
      </div>
    </div>
    </>
  )
}

const page = () => {
  return (
    <div className='min-h-screen from-emerald-400 via-amber-300 to-orange-400 bg-gradient-to-r'>
    {header()}
    <div className=''>
    {userPost("User1",text1)}
    {userPost("User2",text2)}
    {userPost("User3",text1)}
    {userPost("User4",text2)}
    </div>
    {footer()}
    </div>
  )
}

export default page