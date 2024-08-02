import React from 'react'
import Link from 'node_modules/next/link'

const userpost = ({user,text}) => {
    return(
        <>
        <div className="flex flex-col my-2 px-8 py-3 bg-white rounded shadow hover:shadow-md">
          <div className>
            <Link href={"/Profile/"+user} className=" hover:text-orange-400 text-emerald-400 font-semibold py-2 leading-10">{user}</Link>
          </div>
          <div>
            <p className="text-black font-medium break-normal">{text}</p>
          </div>
        </div>
        </>
      )
}

export default userpost