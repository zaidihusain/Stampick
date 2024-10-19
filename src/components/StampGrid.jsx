import React from 'react';
import StampCard from './StampCard';
import Link from 'next/link';

const StampGrid = ({ stamps }) => {
  return (
    <div className='flex flex-col gap-4 items-center w-full'>
    <div className="grid grid-cols-2 sm:grid-cols-4  gap-7 p-4 px-11 w-full">
      {stamps.map((stamp, index) => (
        <StampCard key={index} stamp={stamp} />
      ))}
    </div>
    
    <Link href={'/collections'} className='w-full flex justify-center'><div className='p-3 rounded-2xl bg-[#222528] text-white font-semibold w-4/5 text-center text-xs mb-4 cursor-pointer hover:bg-white hover:text-[#222528] transition'>View All Collection ➜</div></Link>
    </div>
  );
};

export default StampGrid;
