import React, { Component } from 'react';
import Die from "./Die"
import './rolldice.css'
class RollDice extends Component {
    state = {
        die1: "one",
        die2: "one",
        rolling: false
    };
    makeTimer = e => {
        const number = ["one", "two", "three", "four", "five", "six"]
        this.setState({ rolling: true })
        document.getElementById("die-div").classList.add("roll")
        setTimeout(() => {
            this.setState({ die1: number[Math.floor(Math.random() * 6)], die2: number[Math.floor(Math.random() * 6)], rolling: false });
            document.getElementById("die-div").classList.remove("roll")

        }, 1000);
    }
    render() {
        return (
            <div>
                <div id="die-div">
                    <Die num={this.state.die1} />
                    <Die num={this.state.die2} />
                </div>
                <button id='roll-btn' disabled={this.state.rolling} onClick={this.makeTimer}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        );
    }

}

export default RollDice;