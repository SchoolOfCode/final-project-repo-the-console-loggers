import React from 'react';


const Card = ({id, name, expdate, quantity}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/Tuna.svg'}
          alt="Bananas"
        />
        <div className="texts">
          <h1 className="title">{name}</h1>
          <p className="quantity">{quantity}</p>
          <div className='expiration'>
          <span className="expiry-dot red"></span>
          <p className="expiration-date">{expdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
