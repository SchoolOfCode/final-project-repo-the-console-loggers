import React from 'react';
import GreenBanner from '../../components/GreenBanner/GreenBanner';

function RecipeList() {
  return (
    <div className="main-recipelist">
      <GreenBanner text="Looking recipes with: Salmon" />
      <h1>The recipes go here</h1>
    </div>
  );
}

export default RecipeList;
