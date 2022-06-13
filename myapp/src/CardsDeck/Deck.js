import React, { Component } from "react";
import axios from 'axios'
const BASE_API_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = { deck: null, drawn: [] };
        this.getCard = this.getCard.bind(this)
    }

    async componentDidMount() {
        let deck = await axios.get(`${BASE_API_URL}/new/shuffle/`)
        this.setState({ deck: deck.data })
    }

    async getCard() {
        let cardUrl = `${BASE_API_URL}/${this.state.deck.deck_id}/draw/`
        let cardRes = await axios.get(cardUrl)
        console.log(cardRes.data)

        let card = cardRes.data.card[0];
        this.setState(st => ({
            drawn: [
                ...st.drawn,
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.suit} ${card.value}`
                }
            ]
        }))

    }
    render() {
        return (
            <div>
                <h1>Card Dealer</h1>

                <button onClick={this.getCard}>Get cards</button>
            </div>
        )
    }

}
export default Deck;