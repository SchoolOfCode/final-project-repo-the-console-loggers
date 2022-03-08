//Utils
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';

//Components
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
//Data
import { recipes } from '../../data/recipes';
//Pages
import Login from '../Login/Login';

function RecipeList() {
  const { isAuthenticated } = useAuth0();
  const { state } = useLocation();
  const [recipesSearch] = useState(recipes);

  //Filter selected items on home
  const chosenIngredients =
    state && state.checkboxStatus.filter((item) => item.isChecked === true);
  const stateLength = state && chosenIngredients.length - 1;

  return isAuthenticated ? (
    <div className='main-recipelist'>
      {!state ? null : (
        <GreenBanner
          text={`Looking recipes with: ${
            stateLength > 0
              ? `${chosenIngredients[0].name} & another ${stateLength} ingredients`
              : chosenIngredients[0].name
          }`}
        />
      )}

      {!state ? (
        <EmptyScreen
          title='No ingredients selected'
          icon='empty-pot'
          subText='Add some ingredients to your frige to start searching'
          highlight='recipes'
          linkTo='../Home/AddIngredient'
        />
      ) : (
        recipesSearch.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.title}
            image={recipe.image}
            missingIngredientsCount={recipe.missedIngredientCount}
            usedIngredientCount={recipe.usedIngredientCount}
          />
        ))
      )}
    </div>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default RecipeList;
