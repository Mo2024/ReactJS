import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        heads: 'react-coin-heads-jpg',
        tails: 'react-coin-tails-jpg'
    }
    state = {
        sides: [{ heads: { value: false, count: 0 } }, { tails: { value: false, count: 0 } }],
        flips: 0
    }

    flip = e => {
        let rand = Object.values(this.state.sides[Math.floor(Math.random() * this.state.sides.length)])[0];
        console.log(rand)
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin />
                <button onClick={this.flip}>Flip me!</button>
                <p>Out of {this.state.flips}, there have been {this.state.sides[0].heads.count} heads and {this.state.sides[1].tails.count} tails</p>
            </div>
        );
    }

}


export default CoinFlip;