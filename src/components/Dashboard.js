import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button className='dashButton' onClick={props.ballHandler}>
        Ball
      </button>
      <button className='dashButton' onClick={props.strikeHandler}>
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
