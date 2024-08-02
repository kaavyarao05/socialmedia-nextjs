"use client";
import { usePathname } from "next/navigation";



function header(){
    const username=usePathname().split('/')[2];
    return(
      <>
      <header class='w-full max-h-28 px-10 pb-8 mx-auto rounded-b-lg bg-white shadow-md'>
          <div class='text-base pt-4 leading-3 background bg-white mx-auto space-y-6'>
            <h1 class="flex items-center justify-center text-2xl font-bold text-black">{username}'s Profile</h1>
            
          </div>
      </header>
      </>
  
    )
  }


export default function Post() {
const pathname = usePathname().split()[2];
return (
    <div class='min-h-screen from-emerald-400 via-amber-300 to-orange-400 bg-gradient-to-r'>
    {header()}
    <div class=''>
      <h2 class="text-center py-5 text-black">This user has not posted anything</h2>
    </div>
    </div>
); 

}
