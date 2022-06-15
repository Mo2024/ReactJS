import React, { Component } from "react";
import { useParams } from 'react-router-dom'

function Meal() {
  const { foodName, drinkName } = useParams();
  const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
  const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
  return (
    <div>
      <h1>
        THIS IS A MEAL OF {foodName} + {drinkName}
      </h1>
      <img src={foodUrl} />
      <img src={drinkUrl} />
    </div>
  );
}
export default Meal;
