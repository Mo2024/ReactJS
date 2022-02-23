import React, { Component } from 'react';


class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }

    };

    render() {
        const { height, width, backgroundColor } = this.props
        return (
            <div >
                <div style={{ backgroundColor, height: `${height}px`, width: `${width}px` }}></div>
                <button onClick={this.props.removeBox}>Remove color</button>
            </div >
        )
    }
}
export default Box;