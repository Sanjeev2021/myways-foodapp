import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import './homepage.css'

function FoodTable() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const storedFoodData = localStorage.getItem("allFoodData");
    const allFoodData = storedFoodData ? JSON.parse(storedFoodData) : [];
    setFoodData(allFoodData);
  }, []);

  

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div class="cards">
          {foodData.map((data, index) => {
            return (
              <div class=" card [ is-collapsed ] " key={index}>
                <div class="card__inner [ js-expander ]">
                  <div>Name: {data.foodName}</div>
                  <div>Type: {data.foodType}</div>
                  <div>Delivery Time: {data.maxDeliveryTime}</div>
                </div>
              </div>
            );
          })};
        </div>
      </div>
    </div>
  );
}

export default FoodTable;
