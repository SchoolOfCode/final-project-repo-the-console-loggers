import Checkbox from '../Ui/Checkbox/Checkbox';
import { useState } from 'react';

const Card = ({ name, expdate, quantity }) => {
  const [expandedCard, setExpandedCard] = useState(false);

  //Date variables
  let date = new Date();
  let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  let expiryDate = expdate;

  //Open or close the expanded card
  const expandCard = () => {
    setExpandedCard(!expandedCard);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="main-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/food/${name}.svg`}
            alt={name}
          />
          <div className="texts" onClick={expandCard}>
            <h1 className="title">{name}</h1>
            <p className="quantity">{quantity}</p>
            <div className="expiration">
              <span
                className={`expiry-dot ${
                  today >= expiryDate ? 'red' : 'green'
                }`}
              ></span>
              <p className="expiration-date">{expdate}</p>
            </div>
          </div>
          <div className="checkbox-container">
            <Checkbox />
          </div>
        </div>
        <div
          className={`expanded-card ${expandedCard ? 'showCard' : 'hideCard'}`}
        >
          <div className="buttons-container">
            <button>Cook</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
