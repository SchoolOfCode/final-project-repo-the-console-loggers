//Utils
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';

//Components
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';

//Utils
import { createApiURL } from '../../Utils/createApiUrl';
import { fetchRecipesApi } from '../../Utils/Fetch';

//Pages
import Login from '../Login/Login';

function RecipeList() {
  const { isAuthenticated } = useAuth0();
  const { state } = useLocation();

  const [apiSearch, setApiSearch] = useState([]);

  //Filter selected items on home
  const chosenIngredients =
    state && state.checkboxStatus.filter((item) => item.isChecked === true);
  const stateLength = state && chosenIngredients.length - 1;


  //Set the URL for the API
  const ApiURLString = chosenIngredients && createApiURL(chosenIngredients);

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetchRecipesApi(ApiURLString);
      setApiSearch(response);
    };
    fetchResponse();
  }, [ApiURLString]);


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
        apiSearch.map((recipe) => (
          <RecipeCard
            id={recipe.id}
            key={recipe.id}
            name={recipe.title}
            image={recipe.image}
            likes={recipe.likes}
            missingIngredientsCount={recipe.missedIngredientCount}
            usedIngredientCount={recipe.usedIngredientCount}
            checkboxStatus={state.checkboxStatus}
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
