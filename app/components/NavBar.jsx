import React from 'react';
import About from './AboutButton';
import Button from './Button';
import Image from 'node_modules/next/image';
import ProfileImage from 'public/profileimage.jpg'
import Link from 'node_modules/next/link';
import Logo from 'public/logo.png';

const NavBar = () => {
  return (
    <div className='from-emerald-200 via-amber-100 to-orange-200 bg-gradient-to-r'>
        <nav className=" flex items-center justify-center">
          <div className="flex space-x-4 py-5">
            <Image src={Logo} width={65} height={40} className='-hue-rotate-60 mr-10 '></Image>
            <About></About>
            <Button text="Home" link="\"/>
            <Button text="Log In" link="\login\"/>
          </div>
      
</nav><div className="absolute right-5 top-5">
        
        <div className="relative ml-3">
          <div>
            <Link href={"/Profile/User/"}>
              <Image src={ProfileImage} height={40} width={40} className='rounded-full border-transparent hover:border-white border-x-4 border-y-4'/>
            </Link>
          </div>
      </div>
    </div>

    </div>
  )
}

export default NavBar