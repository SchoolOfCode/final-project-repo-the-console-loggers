import React from 'react';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { recipes } from '../../data/recipes';

function RecipeList() {
  return (
    <div className="main-recipelist">
      <GreenBanner text="Looking recipes with: Salmon" />

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
  );
}

export default RecipeList;
