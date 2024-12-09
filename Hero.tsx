import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full mx-auto flex justify-center'>
        <div className='flex justify-center'>
      <h1 className='text-center'>Hello Nike App</h1> 
      <p className='flex justify-center text-center'>Download the app to access everything Nike.<span>Get Your Great</span></p> 
    </div>
    <div className='flex justify-center bg-cover'>
        <Image src='/image/Image.svg' alt='shoe' width={1344} height={977}/>

    </div>
   


    </div>
  )
}

export default Hero;