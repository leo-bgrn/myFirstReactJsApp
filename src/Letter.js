import "./Letter.css";
var React = require("react");
var PropTypes = require("prop-types");

const Letter = ({ symbol, feedback, onClick }) => (
  <div className={`letter ${feedback}`} onClick={() => onClick(symbol)}>
    <span className="test">{symbol}</span>
  </div>
);

Letter.propTypes = {
  symbol: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf(["used", "notUsed"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Letter;
