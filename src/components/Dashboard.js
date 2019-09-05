import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.ballHandler}>Ball</button>
      <button onClick={props.strikeHandler}>Strike</button>
    </div>
  );
};

export default Dashboard;
