import React, { Component } from "react";

class Scorekeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        // this.singleKill = this.singleKill.bind(this)
        this.triplekill = this.triplekill.bind(this)

    }
    // singleKill() {
    //     this.setState(st => {
    //         return { score: st.score + 1 };
    //     });
    // }
    incrementScore(curState) {
        return { score: curState.score + 1 };
    }
    triplekill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.triplekill}>Single Kill!</button>
            </div>
        );
    }
}
export default Scorekeeper;