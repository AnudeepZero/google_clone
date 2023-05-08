"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'




export default function SearchHeaderOption() {
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const searchTerm = searchparams.get("searchTerm");
  function selectTab(tab) {
    const query = searchTerm ? `?searchTerm=${searchTerm}` : "";
    const href = `/search/${tab === "images" ? "image" : "web"}${query}`;
    router.push(href);
  }
  
  return (
    <div className='flex space-x-2 select-none  border-b-4 w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm' >
      <div className={`flex items-center space-x-1 border-b-4  border-transparent active:text-blue-500 cursor-pointer pb-3 px-2
       ${pathname==="/search/web" && "!text-blue-600 !border-blue-600"} `} 
       onClick={()=>selectTab("all")}
       >
        <AiOutlineSearch className='text-md'/>
        <p>All</p>
      </div>

      <div className={`flex items-center space-x-1 border-b-4  border-transparent active:text-blue-500 cursor-pointer pb-3 px-2
       ${pathname==="/search/image" && "!text-blue-600 !border-blue-600"} `} 
       onClick={()=>selectTab("images")}
       >
        <AiOutlineCamera className='text-md'/>
        <p>Images</p>
      </div>
    </div>
  )
}
