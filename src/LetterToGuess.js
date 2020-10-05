import "./LetterToGuess.css";
var React = require("react");
var PropTypes = require("prop-types");

const LetterToGuess = ({ symbol, feedback }) => (
  <div className={`letterToGuess ${feedback}`}>
    <span>{feedback === "guessed" ? symbol : "_"}</span>
  </div>
);
LetterToGuess.propTypes = {
  symbol: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf(["hidden", "guessed"]).isRequired,
};

export default LetterToGuess;
