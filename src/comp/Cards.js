import React from 'react';
import { cards } from '../data/health';

function Cards() {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h4>{card.title}</h4>
          <p>{card.date}</p>
          <span className={card.color}>{card.status}</span>
        </div>
      ))}
    </div>
  );
}

export default Cards;

