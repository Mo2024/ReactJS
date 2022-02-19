import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        heads: 'https://qph.fs.quoracdn.net/main-qimg-57e97e36918b359f28e86b8cbf567436.webp',
        tails: 'https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?k=20&m=476142091&s=612x612&w=0&h=mX2-F4WTLslfOBnUrkOrp6noMqUyzAO1Iq8aHF_EGkY='
    }
    state = {
        sides: {
            heads: { value: false, count: 0 },
            tails: { value: false, count: 0 },
        },
        url: 'null',
        flips: 0
    }


    flip = e => {
        this.setState(Object.keys(this.state.sides).forEach(key => { if (this.state.sides[key].value) this.state.sides[key].value = false }))
        let rand = Object.keys(this.props)[Math.floor(Math.random() * Object.keys(this.props).length)]
        let state = this.state
        state.sides[rand].value = true;
        state.sides[rand].count++;
        state.flips++;
        state.url = rand;
        this.setState({ state })
    }



    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                {this.state.url && <Coin side={this.props[this.state.url]} />}
                <button onClick={this.flip}>Flip me!</button>
                <p>Out of {this.state.flips}, there have been {this.state.sides.heads.count} heads and {this.state.sides.tails.count} tails</p>
            </div>
        );
    }

}


export default CoinFlip;


