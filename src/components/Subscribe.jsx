import React from 'react'

function Subscribe() {
  return (
    <div className='w-full p-14 rounded-3xl bg-[#28424C] flex items-center justify-between'>
      <div className='w-1/2 items-start'>
        <h1 className='font-bold text-3xl'>Stay in the loop</h1>
        <h1 className='font-bold text-3xl opacity-60'>Get the latest insights</h1>
      </div>
      <div className='w-auto flex justify-end'>
      <div className="flex flex-col w-[60%]">
      <div className="flex flex-row w-full mb-4 text-sm space-x-3">
        <input
          type="email"
          placeholder="Your e-mail"
          className="flex-grow p-3 bg-[#304953] text-white rounded-xl focus:outline-none"
        />
        <button className="p-2 bg-white text-black hover:text-white hover:bg-slate-900 transition rounded-xl font-semibold">
          Sign up
        </button>
      </div>
      
      {/* Second div with disclaimer text */}
      <div className="text-xs text-gray-400 text-center">
        By clicking send you’ll receive occasional emails from Stampick. You
        always have the choice to unsubscribe within every email you receive.
      </div>
    </div>
    </div>
    </div>
  )
}

export default Subscribe