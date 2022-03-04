import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { recipes } from '../../data/recipes';
//Pages
import Login from '../Login/Login';

function RecipeList() {
    const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div className='main-recipelist'>
      <GreenBanner text='Looking recipes with: Salmon' />

      {recipes.map((item) => {
        return (
          <RecipeCard
            key={item.id}
            name={item.name}
            cookingTime={item.cookingTime}
            fridgeIngredients={item.fridgeIngredients}
          />
        );
      })}
    </div>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default RecipeList;
