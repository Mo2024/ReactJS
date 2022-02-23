import React, { Component } from 'react';
import './die.css'

class Die extends Component {
    render() {
        return (
            <i className={`fa-solid fa-dice-${this.props.num} fa-dice-five dice fa-10x`} ></i >
        );
    }

}


export default Die;