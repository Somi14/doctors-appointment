"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

const Mybookings = () => {

    const {user}=useKindeBrowserClient();
    const [bookingList, setBookingList]=useState([]);
    useEffect(()=>{
        if (user) {
            getUserBooking();
          }
    },[user])


   const getUserBooking=()=>{
     GlobalApi.getUserBookingList(user?.email)
     .then((res)=>{
        console.log(res.data.data)    
        setBookingList(res.data.data);    
     })
   }

  const filterUserBooking=(type)=>{
    const result=bookingList.filter(item=>
      type=='upcoming'? new Date(item.attributes.Date)>=new Date()
      : new Date(item.attributes.Date)<=new Date()
    )
    console.log(result);
    return result;
  }

  return (
    <div className='px-4 sm:px-10 mt-10'>
      <h2 className='font-bold text-2xl'>My Booking</h2>
      <Tabs defaultValue="upcoming" className="w-full mt-5">
        <TabsList className='width-full justify-start'>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
            <BookingList bookingList={filterUserBooking('upcoming')}
             updateRecord={()=>getUserBooking()}
             expired={false}
            /> 
        </TabsContent>
        
        <TabsContent value="expired">
            <BookingList bookingList={filterUserBooking('expired')}
              updateRecord={()=>getUserBooking()}
              expired={true}
            /> 
        </TabsContent>
        </Tabs>

    </div>
  )
}

export default Mybookings
