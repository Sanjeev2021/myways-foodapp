import React, { useState } from "react";
import Navbar from "./navbar";
import "./form.css";

export default function FormPage() {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("Delicious Food");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodData = { foodName, foodType, maxDeliveryTime };
    const storedFoodData = localStorage.getItem("allFoodData");
    const allFoodData = storedFoodData ? JSON.parse(storedFoodData) : [];
    allFoodData.push(newFoodData);
    localStorage.setItem("allFoodData", JSON.stringify(allFoodData));
    alert("Submitted")
  };

  return (
    <div>
      <Navbar />
      <div id="form-main">
        <div id="form-div">
          <form class="form" id="form1" onSubmit={handleSubmit}>
            <p class="name">
              <input
                name="Food-Name"
                type="text"
                class="feedback-input"
                placeholder="Food Name"
                id="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
              />
            </p>

            <p class="email">
              <select
                id="foodType"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              >
                <option value="Delicious Food">Delicious Food</option>
                <option value="Nutritious Food">Nutritious Food</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Beverages">Beverages</option>
                <option value="Desserts">Desserts</option>
              </select>
            </p>

            <p class="text">
              <input
                id="maxDeliveryTime"
                type="number"
                min="0"
                placeholder="max delivery time"
                value={maxDeliveryTime}
                onChange={(e) => setMaxDeliveryTime(e.target.value)}
              />
            </p>

            <div class="submit">
              <input type="submit" value="SEND" id="button-blue" />
              <div class="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
