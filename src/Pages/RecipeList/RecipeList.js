import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { recipes } from '../../data/recipes';
import { useLocation } from 'react-router-dom';
//Pages
import Login from '../Login/Login';

function RecipeList() {
  const { isAuthenticated } = useAuth0();
  const { state } = useLocation();

  const [recipesSearch] = useState(recipes);

  const chosenIngredients =
    state && state.checkboxStatus.filter((item) => item.isChecked === true);
  const stateLength = state && chosenIngredients.length - 1;

  return isAuthenticated ? (
    <div className='main-recipelist'>
      {!state ? (
        <GreenBanner text='You havent chosen any ingredient' />
      ) : (
        <GreenBanner
          text={`Looking recipes with: ${
            stateLength > 0
              ? `${chosenIngredients[0].name} & another ${stateLength} ingredients`
              : chosenIngredients[0].name
          }`}
        />
      )}

      {!state
        ? 'You havent chosen any ingredient'
        : recipesSearch.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.title}
              image={recipe.image}
              missingIngredientsCount={recipe.missedIngredientCount}
              usedIngredientCount={recipe.usedIngredientCount}
            />
          ))}
    </div>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default RecipeList;
