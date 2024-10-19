import React from 'react';

function Footers() {
  return (
    <footer className=" text-gray-400 py-9 px-20 border-b border-b-white border-opacity-10">
      <div className="flex space-x-44 text-sm">
        <div className='w-72'>
          <h3 className="text-white mb-4 font-bold text-lg ">Stay in the loop</h3>
          <div className="flex w-full text-sm">
            <input
              type="email"
              placeholder="Your e-mail"
              className="p-3 w-full rounded-lg rounded-r-none bg-[#222528] text-white placeholder-opacity-20 focus:outline-none text-xs"
            />
            <button className="p-3  rounded-r-lg text-white bg-[#222528]">
              →
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-white mb-4 font-bold text-lg">Marketplace</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Explore</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white flex items-center">
                Jobs
                <span className="bg-gray-600 text-xs text-white ml-2 px-2 py-1 rounded">We&apos;re hiring!</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Help center</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-4 font-bold text-lg">Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Stampick API</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Bug bounty</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Become a partner</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-4 font-bold text-lg">Join us</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">X</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Discord</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Farcaster</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
