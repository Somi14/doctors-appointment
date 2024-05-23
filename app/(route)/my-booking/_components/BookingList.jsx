import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'
import moment from 'moment/moment'
import Image from 'next/image'
import React from 'react'
import CancelAppointment from './CancelAppointment'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'

const BookingList = ({bookingList, expire, updateRecord}) => {
  const onDeleteBooking=(item)=>{
    console.log(item)
    GlobalApi.cancelBooking(item.id).then(res=>{
        console.log(res);
        if(res){
          toast("Your Appointment has been canceled successfully")
          updateRecord();
        }
    })
  }
  return (
    <div >
      {bookingList.map((item, index)=>(
        <div className='flex gap-4 items-center border p-5 m-3 rounded-lg'>
          <Image src={item.attributes.doctor.data.attributes?.image?.data?.[0]?.attributes?.url}
          className='rounded-full object-cover h-[70px] w-[70px]'
          width={70}
          height={70}
          alt='doc-image'
          />   

          <div className='flex  flex-col gap-2 w-full'>
           
            <h2 className='font-bold text-[18px] items-center flex justify-between'>{item.attributes.doctor.data.attributes?.Name}
            {!expire && <CancelAppointment onContinueClick={()=>onDeleteBooking(item)}/>}
            </h2>

            <h2 className='flex gap-2 text-gray-500'> <MapPin className='text-primary h-5 w-5'/>
              {item.attributes.doctor.data.attributes?.Address}</h2>

            <h2 className='flex gap-2'><Calendar className='text-primary h-5 w-5'/>Appointment On:
            { moment(item.attributes.Date).format('DD-MMM-YYYY')}</h2>

           <h2 className='flex gap-2'><Clock className='text-primary h-5 w-5'/> At Time : {item.attributes.Time} </h2>
          </div> 
        

          </div>
      ))}
    </div>
  )
}

export default BookingList
