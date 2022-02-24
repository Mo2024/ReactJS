import React, { Component } from "react";
import axios from 'axios'

class GithubUser extends Component {

    constructor(props) {
        super(props);
        this.state = { imgUrl: '', name: '' };
    }

    async componentDidMount() {
        let res = await axios.get(`https://api.github.com/users/${this.props.username}`)
        let data = res.data
        this.setState({ imgUrl: data.avatar_url, name: data.name })
    }

    render() {
        return (
            <div>

                <h1>Github user: {this.state.name}</h1>
                <img src={this.state.imgUrl} />

            </div>
        )
    }

}
export default GithubUser;