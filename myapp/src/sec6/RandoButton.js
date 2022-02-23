import React, { Component } from 'react';
class RandoButton extends Component {
    state = { num: 0 };

    getRandomNumber = e => {
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({ num: rand });
    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.getRandomNumber}> Click Me!</button>
            </div>
        );
    }

}


export default RandoButton;