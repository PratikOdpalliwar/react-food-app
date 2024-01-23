import React from 'react'
import FoodBox from '../FoodBox/FoodBox'


const Home = () => {
  return (
    <div className="z-0 w-full">
        <img src="./background/food.jpg" alt="" />
        
        <div className="flex flex-row flex-wrap items-center justify-center">
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
            <FoodBox/>
        </div>
    </div>
  )
}

export default Home
