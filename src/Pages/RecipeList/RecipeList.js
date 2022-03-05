//Utils
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { createApiURL } from '../../Utils/createApiUrl';
import { fetchRecipesApi } from '../../Utils/Fetch';
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
  const [apiURL, setApiURL] = useState('');
  const [apiSearch, setApiSearch] = useState([]);

  //Filter selected items on home
  const chosenIngredients =
    state && state.checkboxStatus.filter((item) => item.isChecked === true);
  const stateLength = state && chosenIngredients.length - 1;

  //Set the URL for the API
  useEffect(() => {
    //API FINAL URL TO BE USE IN THE FETCH
    const ApiURLString = chosenIngredients && createApiURL(chosenIngredients);
    setApiURL(ApiURLString);
  }, [chosenIngredients]);

  // //TEST
  // chosenIngredients && console.log(apiURL);

  // useEffect(() => {
  //   const fetchResponse2 = async (apiURL) => {
  //     const response = await fetchRecipesApi(
  //       `https://api.spoonacular.com/recipes/findByIngredients?ingredients=Aubergine&number=10&apiKey=cdcba90663c34246a87128d9ce80330c`
  //     );
  //     console.log(response);
  //     setApiSearch(response);
  //   };

  //   fetchResponse2(apiURL);
  // }, [apiURL]);

  // console.log(apiSearch);

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
