import React from 'react'
import Image from 'next/image'


const TopHeader = () => {
  return(
    <div>
       {/* Top Header */}
       <div className="bg-black text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section: Small Icon */}
          <div className="flex items-center">
            <Image
              src="/image/Frame.svg" /* frame ka path lagaya he */
              alt="Icon"
              className="h-4 w-4 mr-2"
            />
          </div>

          {/* Right Section: Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Find a Store
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              Join Us
            </a>
            <a href="#" className="hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  
  }
  export default TopHeader;