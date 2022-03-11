//Utils
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//Components
import Button from '../../components/Ui/Button/Button';
import Checkbox from '../../components/Ui/Checkbox/Checkbox';

//Pages
import Login from '../Login/Login';

//Temp data
import { mockRecipe } from '../../data/mockRecipe';

function FullRecipe() {
  const { isAuthenticated } = useAuth0();
  const { state } = useLocation();
  //Uncomment these 2 lines in productions
  // const apiURL = `https://api.spoonacular.com/recipes/${state.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`;
  // const [recipe, setRecipe] = useState();
  //Comment this line to use the api
  const [recipe, setRecipe] = useState(mockRecipe);
  const [ingredientsOfRecipe, setIngredientsOfRecipe] = useState([]);
  const image = state.image;
  const [checkboxStatus, setCheckboxStatus] = useState(state.checkboxStatus);
  const [selected, setSelected] = useState(false);

  //Uncomment the useEffect & leave the state recipe empty to use real data from the API.
  // useEffect(() => {
  //   const fetchResponse = async () => {
  //     const response = await fetchGet(apiURL);
  //     setRecipe(response);
  //   };
  //   fetchResponse();
  // }, [apiURL]);

  useEffect(() => {
    const getIngredients = () => {
      const mapIngredients =
        recipe &&
        recipe[0].steps.map((item) =>
          item.ingredients.map(
            (ingredient) =>
              ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)
          )
        );

      const flatArray = recipe && mapIngredients.flat();
      const result = [...new Set(flatArray)];
      return result;
    };
    setIngredientsOfRecipe(getIngredients());
  }, [recipe]);

  return isAuthenticated ? (
    <main className='main-full-recipe '>
      <div className='recipe-container'>
        <img className='recipe-img' src={image} alt='Recipe' />
        <div className='recipe-instructions'>
          <h2 className='recipe-name'>{state.name}</h2>
          <div className='likes-container'>
            <img
              className='like-img'
              src={`${process.env.PUBLIC_URL}/assets/icons/heart.svg`}
              alt='heart'
            />{' '}
            {`${state.likes} ${state.likes === 1 ? 'Like' : 'Likes'}`}
          </div>
          <p className='ingredients-title'>Ingredients</p>
          <div className='ingredients-container'>
            {ingredientsOfRecipe.map((ingredient, index) => (
              <div key={ingredient} className='ingredient-Layer'>
                <Checkbox
                  size='small'
                  id={ingredient}
                  checkboxStatus={checkboxStatus}
                  setCheckboxStatus={setCheckboxStatus}
                  selected={selected}
                  setSelected={setSelected}
                />

                <p
                  className={
                    state.chosenIngredients.some(
                      (chosen) =>
                        chosen.name.toUpperCase() === ingredient.toUpperCase()
                    )
                      ? 'grey-out'
                      : 'ingredient-text'
                  }
                >
                  {ingredient}
                </p>
              </div>
            ))}
            <Button
              text='Add to shopping List'
              backgroundColor='yellow-button'
              textColor='white'
            />
          </div>
          <p className='steps-title'>Steps</p>
          {recipe &&
            recipe[0].steps.map((item, index) => (
              <div key={index} className='recipe-step'>
                <span className='step-number'>{item.number}</span>
                {item.step}
              </div>
            ))}
        </div>
      </div>
    </main>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default FullRecipe;
