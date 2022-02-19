import React, { Component } from 'react';
import Colors from './Array';
import Box from './Box'
import './app.css'

class ColorBox extends Component {
    static defaultProps = {
        boxNum: 18,
        colors: Colors.sort(() => Math.random() - 0.5).slice(0, 18)
    }

    state = {
        currColors: this.props.colors.map(color => color)
    }

    colorChange = e => {
        let newColors = this.state.currColors;
        newColors[e.target.id] = Colors.sort(() => Math.random() - 0.5).slice(0, 1)
        this.setState({ newColors })
    }

    render() {

        return (
            <div className='BoxContainer'>
                {this.state.currColors && this.state.currColors.map((h, count = 0) => <Box color={h} click={this.colorChange} id={count} />)}
            </div >
        );
    }

}


export default ColorBox;


