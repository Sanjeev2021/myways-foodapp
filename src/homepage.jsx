import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

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
      <table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Type</th>
            <th>Max Delivery Time</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((food) => (
            <tr key={food.name}>
              <td>{food.foodName}</td>
              <td>{food.foodType}</td>
              <td>{food.maxDeliveryTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
