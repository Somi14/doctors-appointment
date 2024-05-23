"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {
    const[categoryList, setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();
  }, []);

  const getCategoryList=async()=>{
    try {
      const response = await GlobalApi.getCategory();
      setCategoryList(response.data.data)
    } catch (error) {
      console.error("Error fetching category list:", error);
    } 
  }

  return (
    <div className='px-5 mb-10 items-center flex flex-col gap-4'>
        <h2 className='font-bold text-4xl tracking-wide'>
            Search <span className='text-primary'>Doctors</span>
        </h2>
        <h2 className='text-gray-500 text-xl'>Search Your Doctors and Book Appointment in one click</h2>
       
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="submit">
        <Search className='h-4 w-4 mr-1'/>
        Search</Button>
    </div>
    
    <div className=' grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
    {categoryList.map((item, index)=>index<6 && (
      <Link href={'/search/'+item.attributes?.Name} key={index} className='flex flex-col
      text-center gap-2 items-center p-7 cursor-pointer
       bg-blue-50 m-5 rounded-lg hover:scale-110 transition-all ease-in-out'>
        <Image src={item.attributes?.Icon?.data?.[0]?.attributes?.url}
        alt='icon'
        width={70}
        height={70}/>
        <label className='text-primary text-lg'>{item?.attributes?.Name}</label>
      </Link>
    ))}
   </div>


    </div>
  )
}

export default CategorySearch
