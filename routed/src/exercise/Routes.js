import React, { Component } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Error from "./Error";

function Router(props) {

    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={props.dogs} />} />
            <Route exact path="/dogs/:name" element={<DogDetails dogs={props.dogs} />} />
            <Route exact path='*' element={<Error />} />
        </Routes>
    );
}

export default Router;
