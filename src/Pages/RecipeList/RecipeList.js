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

  const [recipesSearch, setRecipesSearch] = useState(recipes);
  console.log(state);

  const mapState = state.checkboxStatus.map((item) => item);
  const stateLength = mapState.length - 1;
  console.log(stateLength);

  return isAuthenticated ? (
    <div className='main-recipelist'>
      <GreenBanner
        text={`Looking recipes with: ${state.checkboxStatus[0].name} & another ${stateLength} ingredients `}
      />

      {recipesSearch.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.title}
          image={recipe.image}
          missingIngredientsCount={recipe.missedIngredientCount}
          usedIngredientCount={recipe.usedIngredientCount}
        />
      ))}

      {/* {recipes.map((item) => {
        return (
          <RecipeCard
            key={item.id}
            name={item.name}
            cookingTime={item.cookingTime}
            fridgeIngredients={item.fridgeIngredients}
          />
        );
      })} */}
    </div>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default RecipeList;
