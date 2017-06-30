import React, { Component } from 'react';

const Player = ({ active, score, index }) => {
  return (
    <div className="list-group-item">
      <p>Player {index + 1} - {score}  {active && 'ready'}</p>
    </div>
  );
}

export default Player;
