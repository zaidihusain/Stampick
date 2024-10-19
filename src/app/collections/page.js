import React from 'react'

import { dummyStamps } from "@/utils/StampData";
import StampCard from '@/components/StampCard';

const AllStampGrid = ({ stamps }) => {
    return (
      <div className='flex flex-col gap-4 items-center w-full'>
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-7 p-4 px-11 w-full">
        {stamps.map((stamp, index) => (
          <StampCard key={index} stamp={stamp} />
        ))}
      </div>
      
        </div>
    );
  };

function page() {
  return (
    <div><div className="border border-opacity-10 border-gray-300 rounded-3xl px-3">
    <div className="flex flex-col gap-5">
      <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">
        Latest Drops
      </div>
      <AllStampGrid stamps={dummyStamps} />
    </div>
  </div></div>
  )
}

export default page