import React from 'react';
import Link from 'node_modules/next/link';

function card(link,text){
    return(
       <Link href={link}>
        <div className='flex text-center min-h-20 min-w-40 mb-10 mt-4 py-5 px-2 rounded-md shadow-lg hover:shadow-md flex-col bg-white text-black'>        
                <div>Image</div>
                <div>{text}</div>       
        </div>
        </Link>
    )
}

const Footer = () => {
  return (
    <footer className="bottom-0 flex items-center from-emerald-200 via-amber-100 to-orange-200 bg-gradient-to-r">
        <div className="flex flex-row space-x-10 mx-auto my-10 max-w-fit px-2">
            {card("https://github.com/kaavyarao05","GitHub")}
            {card("https://www.linkedin.com/in/kaavya-rao-33a7752b7/","LinkedIn")}
            {card("https://leetcode.com/u/kaavyarao05/","LeetCode")}
        </div>
    </footer>
  )
}

export default Footer