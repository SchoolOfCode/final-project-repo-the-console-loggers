import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { icons } from '../../data/icons';
import Checkbox from '../Ui/Checkbox/Checkbox';

const Card = ({
  id,
  name,
  expdate,
  quantity,
  children,
  checkboxStatus,
  setCheckboxStatus,
  sortItems,
}) => {
  // const location = useLocation();
  const [expandedCard, setExpandedCard] = useState(false);
  const [selected, setSelected] = useState(false);

  //Open or close the expanded card
  const expandCard = () => {
    setExpandedCard(!expandedCard);
  };

  return (
    <div className='card-wrapper' data-testid='cardC'>
      <div
        className={`card  `}

        // ${
        //   selected && location.pathname === '/Home'
        //     ? 'selected'
        //     : selected && location.pathname === '/ShoppingList' && 'cross'
        // }
      >
        <div className='main-card'>
          {icons.includes(name) ? (
            <img
              onClick={expandCard}
              src={`${process.env.PUBLIC_URL}/assets/icons/food/${name}.svg`}
              alt={name}
            />
          ) : (
            <img
              onClick={expandCard}
              src={`${process.env.PUBLIC_URL}/assets/icons/food/notFound.svg`}
              alt={name}
            />
          )}
          <div className='texts' onClick={expandCard}>
            <h1 data-testid='headerC' className='title'>
              {name}
            </h1>
            <p className='quantity'>{quantity}</p>
            <div className='expiration'>
              {children}
              <p className='expiration-date'>{expdate}</p>
            </div>
          </div>
          <div className='checkbox-container'>
            <Checkbox
              id={id}
              name={name}
              selected={selected}
              setSelected={setSelected}
              checkboxStatus={checkboxStatus}
              setCheckboxStatus={setCheckboxStatus}
              sortItems={sortItems}
            />
          </div>
        </div>
        <div
          className={
            // ${
            //   selected && location.pathname === '/Home'
            //     ? 'selected'
            //     : selected && location.pathname === '/ShoppingList' &&
            ` 'cross'
            } expanded-card ${expandedCard ? 'hideCard' : 'hideCard'}`
            // if you want to expand card, change first 'hideCard' to 'showCard'
          }
        ></div>
      </div>
    </div>
  );
};

export default Card;
