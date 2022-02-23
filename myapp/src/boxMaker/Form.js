import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "", width: "", backgroundColor: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    };

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state)
    }

    render() {
        return (
            <div>
                <h1>Form Demo</h1>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='height'>height</label>
                    <input
                        type='text'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor='width'>width</label>
                    <input
                        type='text'
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label htmlFor='backgroundColor'>backgroundColor</label>
                    <input
                        type='text'
                        name="backgroundColor"
                        value={this.state.backgroundColor}
                        onChange={this.handleChange}
                    />
                    <br />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;