import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    word: `${randomWord()}`
  };

  constructor(props) {
    super(props);

    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: this.props.word,
      disableKey: false,
      lose: false,
      win: false
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {

    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  // (this.state.guessed.has(ltr) ? console.log(idx) : console.log("_"))
  async handleGuess(evt) {
    let ltr = evt.target.value;
    await this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));

    (this.state.nWrong === this.props.maxWrong) ? this.setState({ disableKey: true, lose: true }) : null
    let count = 0
    this.state.answer.split("").map((ltr) => {
      if (this.state.guessed.has(ltr)) {
        count++;
      }
      if (count === this.state.answer.length) {
        this.setState({ win: true })
      }

    });

  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr) || this.state.disableKey}
      >
        {ltr}
      </button>
    ));
  }
  restart(e) {
    this.setState({
      disableKey: false, nWrong: 0, guessed: new Set(), win: false, lose: false, answer: `${randomWord()}`
    })
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong}/${this.props.maxWrong}`} />
        {this.state.lose ? <div> <h2>You lost!</h2> <button style={{ width: "9rem" }} onClick={this.restart}>Restart</button> </div> : null}
        {this.state.win ? <div> <h2>You won!</h2> <button style={{ width: "9rem" }} onClick={this.restart}>Play again</button> </div> : null}
        <h4>Number of wrongs: {this.state.nWrong}</h4>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>
    );
  }
}

export default Hangman;
