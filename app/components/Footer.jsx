import React from 'react';
import Link from 'node_modules/next/link';
import Image from 'node_modules/next/image';

import Github from '/public/github.png';
import Leetcode from '/public/leetcode.webp';
import Linkedin from '/public/linkedin.webp';

function card(link,image,text){
    return(
       <Link href={link}>
        <div className='flex text-center min-h-20 min-w-60 mb-10 mt-4 py-5 px-2 rounded-md shadow-lg hover:shadow-md flex-col bg-white text-black'>        
                <Image src={Leetcode} height={50} width={50} className='mx-auto my-2'/>
                <div>{text}</div>       
        </div>
        </Link>
    )
}

const Footer = () => {
  return (
    <footer className="bottom-0 flex items-center from-emerald-200 via-amber-100 to-orange-200 bg-gradient-to-r">
        <div className="flex flex-col items-center justify-center md:flex-row space-x-5 mx-auto my-10 px-2">
        <Link href={"https://github.com/kaavyarao05"}>
        <div className='flex text-center min-h-20 min-w-52 mb-10 py-3 rounded-md shadow-lg hover:shadow-md flex-col bg-white text-black'>        
                <Image src={Github} height={50} width={50} className='mx-auto my-2'/>
                <div>GitHub</div>       
        </div>
        </Link>
        <Link href={'https://www.linkedin.com/in/kaavya-rao-33a7752b7/'}>
        <div className='flex text-center min-h-20 min-w-52 mb-10 py-3 rounded-md shadow-lg hover:shadow-md flex-col bg-white text-black'>        
                <Image src={Linkedin} height={50} width={50} className='mx-auto my-2'/>
                <div>LinkedIn</div>       
        </div>
        </Link>
        <Link href={"https://leetcode.com/u/kaavyarao05/"}>
        <div className='flex text-center min-h-20 min-w-52 mb-10 py-3 rounded-md shadow-lg hover:shadow-md flex-col bg-white text-black'>        
                <Image src={Leetcode} height={50} width={50} className='mx-auto my-2'/>
                <div>LeetCode</div>       
        </div>
        </Link>
        </div>
    </footer>
  )
}

export default Footer