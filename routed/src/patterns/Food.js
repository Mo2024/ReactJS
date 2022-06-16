import React, { Component } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./Food.css";

function Food() {
  const { name } = useParams();
  const url = `https://source.unsplash.com/1600x900/?${name}`;
  return (
    <div className='Food'>
      {
        /\d/.test(name)
          ?
          (<Navigate to='/' />)
          :
          (<div><h1>I love to eat {name}</h1><img src={url} alt={name} /></div>)
      }
    </div>
  );
}

export default Food;
