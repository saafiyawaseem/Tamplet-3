import React from 'react'

export const page2 = () => {
  return (
    <div>
        
    <div className="flex flex-col md:flex-row  justify-center items-center h-screen sm:text-4xl">
    <div  className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-slate-400 flex justify-center items-center">Header</div>
    <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-violet-400 flex justify-center items-center">Sidebar</div>
    <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-slate-400 justify-center items-center hidden md:flex">Content1</div>
    <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-violet-400  justify-center items-center hidden md:flex">Content2</div>
    <div  >Content3</div>
    </div>
    
  </div>
);
}

