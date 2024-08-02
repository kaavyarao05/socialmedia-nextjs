"use client";
import React from 'react';
import About from './AboutButton';
import Home from './HomeButton';
import Image from 'node_modules/next/image';
import ProfileImage from 'public/profileimage.jpg'
import Link from 'node_modules/next/link';
import Logo from 'public/logo.png';

const changePage = (url)=>{
    window.location.href = url;
  }

const NavBar = () => {
  return (
    <div>
        <nav className="from-emerald-200 via-amber-100 to-orange-200 bg-gradient-to-r">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 py-5">
            <Image src={Logo} width={65} height={40} className='mr-10 '></Image>
            <About></About>
            <Home></Home>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        <div className="relative ml-3">
          <div>
            <Link href={"/Profile/User/"}>
              <Image src={ProfileImage} height={40} width={40} className='rounded-full border-transparent hover:border-white border-x-4 border-y-4'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar