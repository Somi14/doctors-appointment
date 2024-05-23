"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const CategoryList = ({}) => {
    const[categoryList, setCategoryList]=useState([]);
    
    const params=usePathname();
    const category=params.split('/')[2];
    useEffect(()=>{
      getCategoryList();
     }, []);
  
    const getCategoryList=async()=>{
      try {
        const response = await GlobalApi.getCategory();
        setCategoryList(response.data.data)
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching category list:", error);
      } 
    }
  
  return (
    <div className='h-screen mt-5 flex flex-col'>
      <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className='overflow-visible'>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions" >
        
        {categoryList && categoryList.map((item, index)=>(
            <CommandItem key={index}>
                <Link href={'/search/'+item.attributes?.Name} 
                className={`p-2 flex gap-2 
                text-[15px] text-primary
                rounded-md cursor-pointer
                 w-full items-center
                 ${category==item.attributes?.Name && 'bg-blue-100'}`}>
                    <Image src={item.attributes?.Icon?.data?.[0]?.attributes?.url}
                    alt='icon' width={30} height={30}/>
                    <label>{item.attributes?.Name}</label>
                </Link>
            </CommandItem>

        ))}
    
    </CommandGroup>
   
    
  </CommandList>
</Command>
    </div>
  )
}

export default CategoryList
