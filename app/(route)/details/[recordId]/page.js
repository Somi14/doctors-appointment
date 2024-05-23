"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

const Details = ({params}) => {
  const[doctor, setDoctor]=useState();
  const getDoctorById=()=>{
    GlobalApi.getDoctorDetailsById(params.recordId).then(res=>{
      console.log(res);
      setDoctor(res.data.data);
    })
  }

  useEffect(()=>{
   getDoctorById();
  },[])
  return (
    <div className='p-5 md:px-20'>
     <h2 className='font-bold text-[22px]'>Details</h2>
    
     <div className='grid grid-cols-1 lg:grid-cols-4'>
      {/*Doctor details */}
       <div className='col-span-3'>
       {doctor&&<DoctorDetails doctor={doctor}/>}
       </div>

      {/*Doctor Suggestion */}
       <div>
          <DoctorSuggestionList/>
       </div>
     </div>

    </div>
  )
}

export default Details
