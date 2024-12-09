import React from 'react'

export const Footer = () => {
  return (
    
<div className="bg-gray-100 flex justify-center items-center min-h-screen">
  <div className="text-center p-4">
    {/*<!-- First Look Text -->*/}
    <p className="text-sm text-gray-500 uppercase mb-2">First Look</p>

     {/* <!-- Main Heading -->*/}
    <h1 className="text-[56px] font-medium leading-[60px] text-[#111111] mb-4">
      NIKE AIR MAX PULSE
    </h1>

    {/*<!-- Subheading -->*/}
    <p className="text-gray-600 text-lg max-w-[600px] mx-auto mb-6">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
    </p>

    {/*<!-- Buttons -->*/}
    <div className="flex justify-center gap-4 items-center" >
      <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition">
        Notify Me
      </button>
      <button className="px-6 py-3 border border-black text-black text-sm font-medium rounded-full hover:bg-gray-100 transition">
        Shop Air Max
      </button>
    </div>
  </div>

</div>
  )
}
