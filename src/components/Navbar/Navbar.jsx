import React from 'react'

const Navbar = () => {
  return (
   <div className="shadow-2xl h-32 w-full px-10 py-5 bg-gray-800 font-mono">

<div className="h-1/2 m-2 flex flex-row justify-between items-center ">
       
       <div className='flex flex-row'>
       <img 
        className='w-8 mx-2' 
        src="./logo/burger.png" alt="hamburger" />

       <h1 className='font-bold text-xl'>
        <span className="text-white">
            The
        </span>
        <span className="text-red-500">
            Foodies
        </span>
       </h1>
        </div> 

        {/* <input type="text"
        placeholder='Search Food...' className="border-2 border-violet-500 w-22 rounded px-2" /> */}
    </div>

    {/* <div className="h-1/2 flex flex-row justify-center items-center m-2">
        <button className="w-20 h-6 m-2 p-3 bg-red-500 text-white font-bold flex justify-center items-center font-sans rounded text-sm">
            All
        </button>
        <button className="w-20 h-6 m-2 p-3 bg-red-500 text-white font-bold flex justify-center items-center font-sans rounded text-sm">
            Breakfast
        </button>
        <button className="w-20 h-6 m-2 p-3 bg-red-500 text-white font-bold flex justify-center items-center font-sans rounded text-sm">
            Lunch
        </button>
        <button className="w-20 h-6 m-2 p-3 bg-red-500 text-white font-bold flex justify-center items-center font-sans rounded text-sm">
            Dinner
        </button>
    </div> */}
</div>
  )
}

export default Navbar
