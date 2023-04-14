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
    alert("Submitted");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    margin: "0 auto",
    padding: "32px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "none",
    borderRadius: "4px",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  };

  const labelStyle = {
    marginBottom: "8px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Navbar />
      <div style={divStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <label htmlFor="foodName" style={labelStyle}>
            Food Name
          </label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="Enter food name"
            style={inputStyle}
          />

          <label htmlFor="foodType" style={labelStyle}>
            Food Type
          </label>
          <select
            id="foodType"
            name="foodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select food type</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>

          <label htmlFor="maxDeliveryTime" style={labelStyle}>
            Max Delivery Time (in minutes)
          </label>
          <input
            type="number"
            id="maxDeliveryTime"
            name="maxDeliveryTime"
            value={maxDeliveryTime}
            onChange={(e) => setMaxDeliveryTime(e.target.value)}
            placeholder="Enter max delivery time"
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
