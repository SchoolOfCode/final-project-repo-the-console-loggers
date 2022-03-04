import Checkbox from '../Ui/Checkbox/Checkbox';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Card = ({
  id,
  name,
  expdate,
  quantity,
  children,
  checkboxStatus,
  setCheckboxStatus,
}) => {
  const location = useLocation();
  const [expandedCard, setExpandedCard] = useState(false);
  const [selected, setSelected] = useState(false);

  //Open or close the expanded card
  const expandCard = () => {
    setExpandedCard(!expandedCard);
  };

  return (
    <div className='card-wrapper'>
      <div
        className={`card ${
          selected && location.pathname === '/Home'
            ? 'selected'
            : selected && location.pathname === '/ShoppingList' && 'cross'
        } `}
      >
        <div className='main-card'>
          <img
            onClick={expandCard}
            src={`${process.env.PUBLIC_URL}/assets/icons/food/${name}.svg`}
            alt={name}
          />
          <div className='texts' onClick={expandCard}>
            <h1 className='title'>{name}</h1>
            <p className='quantity'>{quantity}</p>
            <div className='expiration'>
              {children}
              <p className='expiration-date'>{expdate}</p>
            </div>
          </div>
          <div className='checkbox-container'>
            <Checkbox
              id={id}
              selected={selected}
              setSelected={setSelected}
              checkboxStatus={checkboxStatus}
              setCheckboxStatus={setCheckboxStatus}
            />
          </div>
        </div>
        <div
          className={`${
            selected && location.pathname === '/Home'
              ? 'selected'
              : selected && location.pathname === '/ShoppingList' && 'cross'
          } expanded-card ${expandedCard ? 'hideCard' : 'hideCard'}`
          // if you want to expand card, change first 'hideCard' to 'showCard'
          }
        ></div>
      </div>
    </div>
  );
};

export default Card;
