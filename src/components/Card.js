import React from 'react';
import './Card.css';

const Card = props => {

  const cardStyle = {};
  if (props.showing) {
    cardStyle.backgroundColor = props.bgcolor;
  }

  return (
    <div
      className="card"
      style={cardStyle}
      onClick={props.onCardClick}
    >
    </div>
  );
}

export default Card;
