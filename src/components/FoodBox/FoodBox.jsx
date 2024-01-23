import React from 'react'

const FoodBox = () => {
  return (
    <div className="m-5 border-2 border-black rounded h-36 w-72">
    
    <div className="flex flex-row">
        <img 
        className='h-28 m-2 w-28 rounded-full flex justify-start items-center place-content-center'
        src="./background/food.jpg" />

        <div className="h-32 w-full flex justify-between flex-col">
            <h1 className="font-extrabold text-lg my-2">
                Boiled Egg
            </h1>
            <p className="text-sm font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-end">
            <button className="w-14 h-4 m-2 p-3 bg-red-500 text-white font-semibold flex justify-center items-center font-sans rounded text-sm">
            All
        </button>
            </div>
           
        </div>
    </div>

</div>
   
  )
}

export default FoodBox
