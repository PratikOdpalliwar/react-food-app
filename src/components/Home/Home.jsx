import React from "react";
import FoodBox from "../FoodBox/FoodBox";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <div className="z-0 w-full relative">
        <img src="./background/food.jpg" alt="" />

        <input
          type="text"
          placeholder="Search Food..."
          className="absolute right-1/3 left-1/3 top-1/3 border-2 border-violet-500 w-22 rounded px-2"
        />
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center">
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
        <FoodBox />
      </div>
    </div>
  );
};

export default Home;
