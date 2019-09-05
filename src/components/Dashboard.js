import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button
        data-testid='ballBtn'
        className='dashButton'
        onClick={props.ballHandler}>
        Ball
      </button>
      <button
        data-testid='strikeBtn'
        className='dashButton'
        onClick={props.strikeHandler}>
        Strike
      </button>
      <button className='dashButton' onClick={props.hitHandler}>
        Hit
      </button>
      <button className='dashButton' onClick={props.foulHandler}>
        Foul
      </button>
    </div>
  );
};

export default Dashboard;
