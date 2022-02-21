import React, { Component } from 'react';
import './Board.css'

class Board extends Component {
    static defaultProps = {
        cellNum: 25,
    }

    constructor(props) {
        super(props);
        this.state = {
            cells: 0
        };
        this.makeTimer();
    }

    colorChange = e => {
        let newColors = this.state.currColors;
        newColors[e.target.id] = Colors.sort(() => Math.random() - 0.5).slice(0, 1)
        this.setState({ newColors })
    }

    render() {

        return (
            <div className='board'>
                {this.state.currColors && this.state.currColors.map((h, count = 0) => <Box color={h} click={this.colorChange} id={count} />)}
            </div >
        );
    }

}


export default Board;