import Checkbox from '../Ui/Checkbox/Checkbox';
import { useState } from 'react';
import Button from '../Ui/Button/Button';

const Card = ({ name, expdate, quantity, children }) => {
  const [expandedCard, setExpandedCard] = useState(false);

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
              {children}
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
            <Button
              text="Cook"
              backgroundColor="transparent"
              textColor="green"
            />
            <Button
              text="Delete"
              backgroundColor="red-button"
              textColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
