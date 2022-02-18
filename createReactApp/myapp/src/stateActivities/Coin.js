import React, { Component } from 'react';
import './coin.css'

class Coin extends Component {
    static defaultProps = {
        heads: 'react-coin-heads-jpg',
        tails: 'react-coin-tails-jpg'
    }
    render() {
        return (
            <div>
                <img src={'https://tinyurl.com/react-coin-heads-jpg'} />
            </div>
        );
    }

}


export default Coin;