import Image from 'next/image'
import React, { useEffect } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'


const DoctorList = ({doctorList, heading='Popular Doctors' }) => {
    
  useEffect(()=>{
 console.log(doctorList)
  },[])
  return (
    <div className='mb-10 px-10'>
        <h2 className='font-bold text-xl'>{heading}</h2>
       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         gap-7 mt-4'>
        {doctorList.length>0 ?

         (doctorList.map((doctor, index)=>(
            <div key={index} className='border-[1px] rounded-lg p-4
            cursor-pointer hover:border-primary
            hover:shadow-sm transition-all ease-in-out'>
                <Image 
                src={doctor.attributes?.image?.data?.[0]?.attributes?.url}
                alt='doctor' width={500} height={200}
                className='h-[200px] w-full object-cover rounded-lg gap-2'/>

                <div className='mt-3 items-baseline felx flex-col'>
                    <h2 className='text-[14px] bg-blue-100 p-1 rounded-full
                    px-2 text-primary'>{doctor.attributes?.categories?.data?.[0]?.attributes?.Name}</h2>
                    <h2 className='font-bold'>{doctor.attributes?.Name}</h2>
                    <h2 className='text-primary text-sm'>{doctor.attributes?.Year_Of_Experience}</h2>
                    <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
                    
                    <Link href={'/details/'+doctor?.id} className='w-full'>
                    <h2 className='p-2 px-3 border-[1px] border-primary
                    text-primary rounded-full w-full text-center
                    text-[11px] mt-2 cursor-pointer hover:bg-primary
                    hover:text-white transition-all ease-in-out'>Book Now
                    </h2>
                    </Link>
                </div>
                
            </div>
        ))
        )        
        :        
        [1, 2, 3, 4, 5, 6].map((item, index)=>(
            <div className="flex flex-col space-y-3 animate-pulse">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
        ))
        
        
        }


       </div>
    </div>
  )
}

export default DoctorList
