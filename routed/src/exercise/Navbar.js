import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dog App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/dogs" className="nav-link">Home</NavLink>
                        {props.dogs.map((d, i) => (
                            <li className="nav-item" key={i}>
                                <NavLink to={`/dogs/${d.name}`} className="nav-link">{d.name}</NavLink>
                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
