import React, { Component } from "react";
import axios from 'axios'
import './loader.css'
class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { quote: '', isLoaded: false };
    }

    componentDidMount() {
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(function () {
                this.setState({ quote: response.data, isLoaded: true })

            }.bind(this), 2000);

        });
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ?

                    <h1>{this.state.quote}</h1>
                    :
                    <div className="loader"></div>

                }
            </div>
        )
    }

}
export default Timer;