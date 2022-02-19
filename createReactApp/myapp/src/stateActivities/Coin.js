import React, { Component } from 'react';
import './coin.css'
import heads from './react-coin-heads-jpg.jpg'
import tails from './react-coin-tails-jpg.jpg'

class Coin extends Component {
    render() {
        return (
            <div>
                {/* {this.props.side ? : ''} */}
                <img crossOrigin='anonymous' src={this.props.side} />
            </div>
        );
    }

}


export default Coin;