import React, { Component } from "react";
import './DogList.css'
import { Link } from 'react-router-dom'

function DogList(props) {

    return (
        <div className="DogList">
            <h1 className="display-1 text-center my-4">Dog List!</h1>

            <div className="row">

                {props.dogs.map(d => (
                    <div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3>
                            <Link className="underline" to={`/dogs/${d.name}`}>{d.name}</Link>
                        </h3>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default DogList;
