import React, { Component } from 'react';
import './box.css';

class Box extends Component {

    render() {
        return (
            // <div id={this.props.id} onMouseEnter={this.props.click} className='box' style={{ backgroundColor: `${this.props.color}` }}></div>
            <div id={this.props.id} onClick={this.props.click} className='box' style={{ backgroundColor: `${this.props.color}` }}></div>
        );
    }

}


export default Box;


