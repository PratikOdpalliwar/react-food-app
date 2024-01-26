import React, { useState } from "react";
import FoodBox from "../FoodBox/FoodBox";
import axios from "axios";

const Home = () => {

  const [timeoutId, setTimeoutId]= useState()
  const [recipeList, setRecipeList]= useState([])

  const APP_ID = "f45be75f";
  const APP_KEY = "eb8835dec73ecf5b688e2efcde87221d";

  
  const fetchRecipe = async (searchString) => {
   const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    )
    setRecipeList(response.data.hits)
  };
  // 2nd METHOD
  // const fetchRecipe = (searchString) => {
  //   axios.get(
  //      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
  //    ).then(function (response){
  //       console.log(response);
  //    })
  //  };

const onTextChange=(event)=>{
  clearTimeout(timeoutId)
  const timeout = setTimeout(()=>fetchRecipe(event.target.value), 500);
  setTimeoutId(timeout)
}

  return (
    <div>
      <div className="z-0 w-full relative">
        <img src="./background/food.jpg" alt="" />

        <input
        onChange={onTextChange}
          type="text"
          placeholder="Search Food..."
          className="absolute right-1/3 left-1/3 top-1/3 border-2 border-violet-500 w-22 rounded px-2"
        />
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center lg:justify-around">
        
{recipeList.length && recipeList.map((recipeObj) =>
 (<FoodBox recipeObj = {recipeObj.recipe}/>
 ))}

      </div>
    </div>
  );
};

export default Home;


