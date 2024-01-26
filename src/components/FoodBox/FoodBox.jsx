import React from 'react'

const FoodBox = () => {
  return (
    <div className="m-5 border-2 border-black rounded h-36 w-72 ">
    
    <div className="flex flex-row">
        <img 
        className='h-28 m-2 w-28 rounded-full flex justify-start items-center place-content-center'
        src="./background/food.jpg" />

        <div className="h-32 w-full flex justify-between flex-col">
            <h1 className="font-extrabold text-lg my-2 flex justify-center">
                Boiled Egg
            </h1>
            <div className="flex flex-col">
            <button className="w-11/12 h-8 my-2 p-3 text-green-500 border-2 border-black font-semibold flex justify-center items-center font-sans rounded text-xs">
            Ingredients
        </button>

            <button className="w-11/12 h-8 my-2 p-3 text-red-500 border-2 border-black font-semibold flex justify-center items-center font-sans rounded text-xs">
                See Complete Recipe
            </button>
          
            </div>
           
        </div>
    </div>

</div>
   
  )
}

export default FoodBox
