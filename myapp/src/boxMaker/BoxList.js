import React, { Component } from 'react';
import Form from './Form';
import Box from './Box'
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            box: [
                { height: "100", width: "100", backgroundColor: "pink", id: uuid() },
                { height: "200", width: "200", backgroundColor: "red", id: uuid() }
            ]

        }
        this.addBox = this.addBox.bind(this);

    };

    removeBox(id) {
        this.setState({
            box: this.state.box.filter(obj => {
                return obj.id !== id;
            })
        })
    }

    addBox(box) {
        let newBox = { ...box, id: uuid() };
        this.setState(state => ({
            box: [...state.box, newBox]
        }))
    }

    renderBoxes() {
        return (
            <div>
                {this.state.box.map(box => (
                    <Box
                        key={box.id}
                        height={box.height}
                        width={box.width}
                        backgroundColor={box.backgroundColor}
                        removeBox={() => this.removeBox(box.id)}

                    />
                ))}

            </div>
        )
    }


    render() {
        return (
            <div>
                <Form addBox={this.addBox} />
                {this.renderBoxes()}
            </div>
        )
    }
}
export default BoxList;