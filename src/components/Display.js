import React from "react";

const Display = props => {
  return (
    <div>
      <h2>BALLS: {props.state.balls}</h2>
      <h2>STRIKES: {props.state.strikes}</h2>
    </div>
  );
};

export default Display;
