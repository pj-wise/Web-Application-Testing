import React from "react";

const Display = props => {
  return (
    <div>
      <h2>{props.state.balls}</h2>
      <h2>{props.state.strikes}</h2>
    </div>
  );
};

export default Display;
