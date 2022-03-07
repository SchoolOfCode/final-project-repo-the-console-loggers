import { useState } from 'react';
import { Link } from 'react-router-dom'; //useLocation
import Button from '../Ui/Button/Button';

const RecipeCard = ({
  name,
  image,
  id,
  cookingTime,
  missingIngredientsCount,
  usedIngredientCount,
  // fridgeIngredients,
  // ingredients,
  // serves,
  // directions,
}) => {
  const [expandedCard, setExpandedCard] = useState(false);

  //Open or close the expanded card
  const expandCard = () => {
    setExpandedCard(!expandedCard);
  };

  console.log(image);

  return (
    <div className='card-wrapper-recipe'>
      <div className='card-recipe'>
        <div className='main-card-recipe'>
          <img src={image} alt={name} />
          <div className='texts' onClick={expandCard}>
            <h1 className='recipe-title'>{name}</h1>
            <p className='cookingTime'>
              You have <span className='bold-green'>{usedIngredientCount}</span>{' '}
              out of
              <span className='bold-green'>
                {' '}
                {missingIngredientsCount + usedIngredientCount}{' '}
              </span>{' '}
              ingredients
            </p>
            {/* <p className='fridgeIngredients'>{fridgeIngredients}</p> */}
          </div>
        </div>
        <div
          className={`expanded-card-recipe ${
            expandedCard ? 'showCard' : 'hideCard'
          }`}
        >
          <div className='ingredients'>
            {/* {recipes[0].ingredients.slice(0, 3).map((item) => {
              return (
                <div key={item} className='ingredients-preview'>
                  {item}
                </div>
              );
            })} */}
          </div>

          <div className='buttons-container'>
            <Link
              className='link'
              to='/FullRecipe'
              state={{ id: id, image: image, name: name }}
            >
              <Button
                text='Keep reading'
                backgroundColor='yellow-button'
                textColor='white'
              />
            </Link>
            <Button
              text='Close'
              backgroundColor='transparent'
              textColor='green'
              handleClick={() => setExpandedCard()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
