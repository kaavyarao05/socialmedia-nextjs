'use client';
import React from 'react'

const user1="User1"
const text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero aliquet, tristique mauris at, semper lorem. Nunc efficitur pulvinar massa, id imperdiet odio pulvinar ut. Curabitur mattis orci eu magna imperdiet tincidunt. Aliquam nibh mauris, iaculis sit amet blandit id, luctus in est. Ut vitae turpis diam."

const user2="User2"
const text2="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet neque et augue mattis pellentesque eget ac augue. Phasellus ac nunc venenatis, ullamcorper nunc eu, dictum diam. Duis eleifend, metus ac pharetra consequat, sapien diam dictum tortor, et ultricies nunc tellus id dolor. Aliquam accumsan porta pellentesque. Proin quis nibh arcu."

const changePage = (url)=>{
  window.location.href = url;
}

function header(){
  return(
    <>
    <header class='sticky top-0 w-full max-h-24 px-10 py-3 pb-5 mx-auto rounded-b-lg bg-white shadow-xl'>
        <div class='leading-3 mx-auto space-y-3'>
          <h1 class="text-2xl font-bold text-black">Home Page</h1>
          <button onClick={() => {changePage("/about")}} class="bg-transparent hover:bg-orange-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
          About
          </button>
          <input type='text' class="border-orange-400"></input>
        </div>
    </header>
    </>
  )
}

function userPost(user,text){
  return(
    <>
    <div class="flex m-auto my-3 pt-5 px-3 max-w-3xl bg-white rounded">
      <div class>
        <button onClick={()=>{changePage("Profile/"+user)}} id="username" class="text-black font-semibold min-w-fit">{user} posted</button>
      </div>
      <div>
        <p class="text-black font-medium py-14">{text}</p>
      </div>
    </div>
    </>
  )
}

const page = () => {
  return (
    <>
    {header()}
    <div class='content-center'>
    {userPost(user1,text1)}
    {userPost(user2,text2)}
    </div>
    </>
  )
}

export default page