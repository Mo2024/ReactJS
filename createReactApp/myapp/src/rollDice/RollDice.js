import React, { Component } from 'react';
import Die from "./Die"
import './rolldice.css'
class RollDice extends Component {
    state = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six"
    };
    makeTimer = e => {
        const number = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six"
        }
        setInterval(() => {
            let rand = Math.floor(Math.random() * 6) + 1;
            this.setState({ num: rand });
        }, 1000);
    }
    render() {
        return (
            <div>
                <div id="die-div">
                    <Die />
                    <Die />
                </div>
                <button>Roll Dice!</button>
            </div>
        );
    }

}


export default RollDice;