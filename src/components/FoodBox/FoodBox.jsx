import React, { useState } from "react";

const FoodBox = (props) => {
  const { recipeObj } = props;
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleBox = () => {
    setShowRecipe(!showRecipe);
  };

  return (
    <>
      <div className="m-10 shadow-2xl rounded w-96 relative">
        <div className="flex flex-row">
          <img
            className="m-2 p-2 w-1/2 flex rounded justify-center items-center place-content-center object-cover"
            src={recipeObj.image}
            alt={recipeObj.label}
          />

          <div className="my-5 h-full w-full justify-center flex flex-wrap items-center place-content-center flex-col">
            <h1 className="font-extrabold text-lg my-2 flex justify-center">
              {recipeObj.label}
            </h1>
            <div className="flex flex-col">
              <button
                onClick={toggleBox}
                className="w-11/12 h-8 my-2 p-3 text-green-500 border-2 border-slate-500 font-semibold flex justify-center items-center font-sans rounded text-xs"
              >
                Ingredients
              </button>

              <button
                onClick={() => window.open(recipeObj.url)}
                className="w-11/12 h-10 my-2 p-3 text-red-500 border-2 border-slate-500 focus:shadow-2xl focus:bg-slate-500 font-semibold flex justify-center items-center font-sans rounded text-xs"
              >
                See Complete Recipe
              </button>
            </div>
          </div>
        </div>
      </div>

      {showRecipe && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-10">
          <table className="bg-white shadow-md rounded-md">
            <thead>
              <tr>
                <th className="p-2">Ingredients</th>
                <th className="p-2">Weight</th>
              </tr>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj, index) => (
                <tr key={index}>
                  <td className="p-2">{ingredientObj.text}</td>
                  <td className="p-2">{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-2">
            <button onClick={toggleBox} className="bg-red-500 text-white p-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodBox;
