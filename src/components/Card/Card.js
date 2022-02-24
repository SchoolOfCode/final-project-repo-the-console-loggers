import React from 'react';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/Tuna.svg'}
          alt="Bananas"
        />
        <div className="texts">
          <h1 className="title">Salmon</h1>
          <p className="quantity">2 fillets</p>
          <p className="expiration-date">2 days to expire</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
