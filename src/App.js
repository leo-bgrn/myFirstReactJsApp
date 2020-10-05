import React, { Component } from "react";
import "./App.css";
import Letter from "./Letter";
import LetterToGuess from "./LetterToGuess";
import shuffle from "lodash.shuffle";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const WORDS = [
  "SENTIER",
  "CROIRE",
  "COMPASSION",
  "HORRIBLE",
  "BUFFLE",
  "CAQUET",
  "SOUPE",
  "IMMORTELLE",
  "GRECE",
  "EXAMEN",
];

class App extends Component {
  state = {
    lettersUsed: [],
    wordToGuess: this.getWordToGuess(),
    won: false,
  };

  getFeedbackForLetter(letter) {
    const { lettersUsed } = this.state;
    return lettersUsed.includes(letter) ? "used" : "notUsed";
  }

  getFeedbackForLetterToGuess(letter) {
    const { lettersUsed } = this.state;
    return lettersUsed.includes(letter) ? "guessed" : "hidden";
  }

  // Arrow fx for binding
  handleLetterClick = (symbol) => {
    const { lettersUsed, wordToGuess } = this.state;

    if (lettersUsed.includes(symbol)) {
      return;
    } else {
      const newLettersUsed = [...lettersUsed, symbol];
      this.setState({ lettersUsed: newLettersUsed });
      const userWon = wordToGuess.every((letter) =>
        newLettersUsed.includes(letter)
      );
      if (userWon) {
        this.setState({ won: true });
      }
    }
  };

  getWordToGuess() {
    return shuffle(WORDS)[0].split("");
  }

  resetGame = () => {
    this.setState({
      lettersUsed: [],
      wordToGuess: this.getWordToGuess(),
      won: false,
    });
  }

  displayKeyboard(won) {
    if (!won) {
      return (
        <div className="keyboard">
          {LETTERS.map((letter) => (
            <Letter
              symbol={letter}
              feedback={this.getFeedbackForLetter(letter)}
              onClick={this.handleLetterClick}
              key={`${letter}`}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="button white retry">
          <p>
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text" onClick={this.resetGame}>Play Again</span>
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="pendu">
        <div className="word">
          <div className="centerWord">
            {this.state.wordToGuess.map((letter, index) => (
              <LetterToGuess
                symbol={letter}
                feedback={this.getFeedbackForLetterToGuess(letter)}
                key={index}
              />
            ))}
          </div>
        </div>
        {this.displayKeyboard(this.state.won)}
      </div>
    );
  }
}
export default App;
