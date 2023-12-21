import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card_container'>
      <h1>{props.title}</h1>
      <span>{props.subtitle}</span>
    </div>
  )
}
export default Card
