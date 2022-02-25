import { useState } from 'react';
import Button from '../Ui/Button/Button';
import { recipes } from '../../data/navigation';
const Card = ({ name, cookingTime, fridgeIngredients, ingredients, serves, directions}) => {
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
            <p className="cookingTime">{cookingTime}</p>
            <p className="fridgeIngredients">{fridgeIngredients}</p>
          </div>
        </div>
        <div
          className={`expanded-card ${expandedCard ? 'showCard' : 'hideCard'}`}
        >
            <div className="ingredients">{recipes[0].ingredients.map((item) => {
   return (
   
<div className='ingredients-preview'>{item}</div>
  )
})}
            </div>
            <div className="directions">{directions}
            </div>
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