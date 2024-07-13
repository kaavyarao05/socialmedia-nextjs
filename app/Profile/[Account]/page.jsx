"use client";
import { usePathname } from "next/navigation";

function header(){
    const pathname=usePathname();
    return(
      <>
      <header class='w-full max-h-28 px-10 pb-8 mx-auto rounded-b-lg bg-white shadow-xl'>
          <div class='text-base pt-4 leading-3 background bg-white mx-auto space-y-6'>
            <button onClick={() => window.location.href="../../.."} class="bg-transparent hover:bg-orange-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
            Go Home
            </button>
            <h1 class="flex items-center justify-center text-2xl font-bold text-black">{pathname.split('/')[2]}'s Profile</h1>
            
          </div>
      </header>
      </>
  
    )
  }

export default function Post() {
const pathname = usePathname().split()[2];
return (
    <>
    {header()}
    </>
); 

}
