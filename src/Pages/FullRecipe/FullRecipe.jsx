//Utils
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createNewElement, fetchGet } from '../../Utils/Fetch';

//Components
import Button from '../../components/Ui/Button/Button';
import Checkbox from '../../components/Ui/Checkbox/Checkbox';
import Alert from '../../components/Alert/Alert';

//Pages
import Login from '../Login/Login';

//Temp data
// import { mockRecipe } from '../../data/mockRecipe';

function FullRecipe() {
  const { isAuthenticated, user } = useAuth0();
  const { state } = useLocation();
  //Uncomment these 2 lines in productions
  const apiURL = `https://api.spoonacular.com/recipes/${state.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`;
  const [recipe, setRecipe] = useState();
  //Comment this line to use the api
  // const [recipe, setRecipe] = useState(mockRecipe);
  const [ingredientsOfRecipe, setIngredientsOfRecipe] = useState([]);
  const image = state.image;
  const [checkboxStatus, setCheckboxStatus] = useState(state.checkboxStatus);
  const [selected, setSelected] = useState(false);
  const [ingredientsToAdd, setIngredientsToAdd] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  //Uncomment the useEffect & leave the state recipe empty to use real data from the API.
  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetchGet(apiURL);
      setRecipe(response);
    };
    fetchResponse();
  }, [apiURL]);

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
      const checkIngredient = result.map((item, i) => {
        const newObj = {
          name: item,
          id: i,
          isChecked: false,
        };
        return newObj;
      });
      setIngredientsToAdd(checkIngredient);
      return result;
    };
    setIngredientsOfRecipe(getIngredients());
  }, [recipe]);

  // array of object
  // what we clicked from Home
  // i.e.[{id: 1, name: 'potato', isChecked: true}, {id: 2, name: 'salmon', isChecked: true}]
  // console.log('state.chosenIngredients : ', state.chosenIngredients);

  // array of string
  // ingredients from full recipe
  // i.e.['potato', 'pineapple', 'salmon']
  // console.log('ingredientsOfRecipe : ', ingredientsOfRecipe);

  // array of object
  // ingredients from full recipe
  // i.e.[{id: 1, name: 'potato', isChecked: false}, id: 2, name: 'pineapple', isChecked: false}, {id: 2, name: 'salmon', isChecked: false}]
  // console.log('i am ingredientsToAdd from FullRecipe page :', ingredientsToAdd);

  async function addToShoppingList(e) {
    e.preventDefault();

    ingredientsToAdd.map((ingredient) => {
      //Create the body
      const fetchBody = {
        item_name:
          ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1),
        item_quantity: '1 unit',
        is_checked: false,
        user_id: user.sub,
      };

      //Api url
      const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/shopping`;

      return ingredient.isChecked && createNewElement(fetchBody, apiUrl);
    });

    //Open the form
    setIsAlertOpen(true);
  }

  return isAuthenticated ? (
    <>
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
              {ingredientsToAdd.map((ingredient) => (
                <div key={ingredient.id} className='ingredient-Layer'>
                  <Checkbox
                    size='small'
                    id={ingredient.name}
                    name={ingredient.name}
                    checkboxStatus={checkboxStatus}
                    setCheckboxStatus={setCheckboxStatus}
                    selected={selected}
                    setSelected={setSelected}
                    ingredientsToAdd={ingredientsToAdd}
                    setIngredientsToAdd={setIngredientsToAdd}
                  />

                  <p
                    className={
                      state.chosenIngredients.some(
                        (chosen) =>
                          chosen.name.toUpperCase() ===
                          ingredient.name.toUpperCase()
                      )
                        ? 'grey-out'
                        : 'ingredient-text'
                    }
                  >
                    {ingredient.name}
                  </p>
                </div>
              ))}
              <Button
                text='Add to shopping List'
                backgroundColor='yellow-button'
                textColor='white'
                handleClick={addToShoppingList}
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
      {isAlertOpen && (
        <Alert isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen}>
          <p>Ingredients added to your shopping list</p>
        </Alert>
      )}
    </>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default FullRecipe;
