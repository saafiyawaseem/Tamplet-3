import React from 'react'
import Link from 'next/link'
import Imag from 'next/image';


const   Navbar = () =>{

  return (
  
        <div className="min-h-screen  text-white">
          {/* Navbar */}
          <nav className="bg-white text-black border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <img src="/imag/Vector.png" alt=" Logo" className="h-6" />
                <ul className="flex items-center gap-6 text-sm">
                  <li>New & Featured</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Sale</li>
                  <li>SNKRS</li>
                </ul>
              </div>
    
              </div>
              <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <span className="material-icons text-gray-600 mr-2">search</span>
            <span className="text-sm font-medium hidden md:block">Search</span>
          </button>
          </div>
          </div>
              </nav>
              </div>
    
  )
}

export default Navbar;


    


