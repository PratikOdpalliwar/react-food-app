import React from 'react'

const FoodBox = (props) => {
   console.log("props", props)
   const {recipeObj}= props; 

  return (
    <div className="m-10 shadow-2xl rounded h-52 w-96 ">
    
    <div className="flex flex-row">
        <img 
        className=' m-2 p-2 w-1/2 flex rounded justify-center items-center place-content-center'
        src={recipeObj.image}/>

        <div className="my-5 h-full w-full justify-center flex items-center place-content-center flex-col">
            <h1 className="font-extrabold text-lg my-2 flex justify-center">
                {recipeObj.label}
            </h1>
            <div className="flex flex-col">
            <button className="w-11/12 h-8 my-2 p-3 text-green-500 border-2 border-slate-500 font-semibold flex justify-center items-center font-sans rounded text-xs">
            Ingredients
        </button>

            <button className="w-11/12 h-8 my-2 p-3 text-red-500 border-2 border-slate-500 font-semibold flex justify-center items-center font-sans rounded text-xs">
                See Complete Recipe
            </button>
          
            </div>
           
        </div>
    </div>

</div>
   
  )
}

export default FoodBox
