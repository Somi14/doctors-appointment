import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

const DoctorDetails = ({doctor}) => {
 const socialMediaList=[
    {
        id:1,
        icons:'/facebook (1).png',
        url:''
    },
    {
        id:2,
        icons:'/instagram (1).png',
        url:''
    },
    {
        id:3,
        icons:'/linkedin (1).png',
        url:''
    },
    {
        id:4,
        icons:'/youtube (1).png',
        url:''
    }
 ]

  return (
    <>
    <div className=' grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
         {/*Doc image */}
          <div>
            <Image 
             src={doctor.attributes?.image?.data?.[0]?.attributes?.url}
             width={200} height={200} alt='doc Image'
             className=' rounded-lg w-full h-[270px] object-cover'/>
          </div>
        
        {/*Doc Info */}
          <div className='col-span-2 md:px-10 mt-5 flex flex-col gap-3 items-baseline'>
            <h2 className='font-bold text-2xl'>{doctor.attributes?.Name}</h2>
            <h2 className='flex gap-2 text-gray-500 text-md'>
                <GraduationCap/>
                <span>{doctor.attributes?.Year_Of_Experience} Years of experience</span>
            </h2>
            
            <h2 className='text-md flex gap-2 text-gray-500'>
                <MapPin/>
                <span>{doctor.attributes?.Address}</span>
            </h2>

            <h2 className='text-[14px] bg-blue-100 p-1 rounded-full
                    px-2 text-primary'>{doctor.attributes?.categories?.data?.[0]?.attributes?.Name}
            </h2>

            <div className='flex gap-3'>
                {socialMediaList.map((item, index)=>(
                    <Image key={index}
                     src={item.icons}
                     width={30} height={30}
                     />
                ))}
            </div>

             <BookAppointment doctor={doctor}/>
          </div>

       </div>

       {/*About Doctor */}
       <div className='p-3 border-[1px] rounded-lg mt-5'>
       <h2 className='font-bold text-[20px]'>About Me</h2>
       <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes?.About}</p>
       </div>

    </>
  )
}

export default DoctorDetails
