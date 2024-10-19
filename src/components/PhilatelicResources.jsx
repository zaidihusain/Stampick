import React from 'react'
import ResourceSlider from './ResourceSlider'

function PhilatelicResources() {
  return (
    <div className="bg-[#282C4B] w-full p-4 flex justify-between rounded-3xl my-10 py-10 h-[100vh]">
      <div className='  font-bold w-[40%] px-4 pt-20'>
        <div className="text-white text-4xl  mb-8 text-left w-2/3 ">
          PHILATELIC VIDEOS AND RESOURCES FOR OUR COMMUNITY
        </div>
        <button className="text-sm text-indigo-900 py-3 px-5 rounded-lg hover:bg-gray-300 bg-white">
          Explore StamPick  ➜
        </button>

      </div>
   
      <div className='overflow-x-auto w-full h-full'>
          <ResourceSlider/>
      </div>
   
  </div>
  )
}

export default PhilatelicResources