import React, { Component } from 'react';

const Card = ({ face, index, active, matched, handleClick, shouldChangePlayer }) => {
  const picture = active ? face : 'src/assets/cubes.png'
  return (
    <div className="card"
      onClick={() => handleClick(index)}
      style={{backgroundImage: `url(${picture})`, backgroundSize: 'cover'}}>
    </div>
  );
}

export default Card;
