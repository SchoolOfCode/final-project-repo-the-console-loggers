import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Ui/Button/Button';

import Checkbox from '../../components/Ui/Checkbox/Checkbox';
//Pages
import Login from '../Login/Login';

//Temp data
const data = [
  {
    name: '',
    steps: [
      {
        number: 1,
        step: "To make square hard boiled eggs, you'll need an Egg cuber or Square Egg Press. (See note in About section on where to purchase)",
        ingredients: [
          {
            id: 1129,
            name: 'hard boiled egg',
            localizedName: 'hard boiled egg',
            image: 'hard-boiled-egg.png',
          },
          {
            id: 1123,
            name: 'egg',
            localizedName: 'egg',
            image: 'egg.png',
          },
        ],
        equipment: [],
      },
      {
        number: 2,
        step: 'First boil your eggs, then slide the egg inside the press and screw the top down so it pushes the egg into the corners.',
        ingredients: [
          {
            id: 1123,
            name: 'egg',
            localizedName: 'egg',
            image: 'egg.png',
          },
        ],
        equipment: [],
      },
      {
        number: 3,
        step: 'Let the egg cool and remove it from the mold. For better results use medium size eggs.',
        ingredients: [
          {
            id: 1123,
            name: 'egg',
            localizedName: 'egg',
            image: 'egg.png',
          },
        ],
        equipment: [],
      },
      {
        number: 4,
        step: 'If you intend to prepare this for a party, I suggest you buy several cubers, this way you can boil and chill several eggs at a time, or it will take you a lot of time.',
        ingredients: [
          {
            id: 1123,
            name: 'egg',
            localizedName: 'egg',
            image: 'egg.png',
          },
        ],
        equipment: [],
      },
      {
        number: 5,
        step: 'To prepare hard boiled eggs, place eggs in a saucepan, cover with cold water and bring to a boil over medium heat. As soon as the water comes to a full boil, let the eggs boil for 5 minutes, and then remove from heat and let stand covered in hot water 10 minutes .',
        ingredients: [
          {
            id: 1129,
            name: 'hard boiled egg',
            localizedName: 'hard boiled egg',
            image: 'hard-boiled-egg.png',
          },
          {
            id: 14412,
            name: 'water',
            localizedName: 'water',
            image: 'water.png',
          },
          {
            id: 1123,
            name: 'egg',
            localizedName: 'egg',
            image: 'egg.png',
          },
        ],
        equipment: [
          {
            id: 404669,
            name: 'sauce pan',
            localizedName: 'sauce pan',
            image: 'sauce-pan.jpg',
          },
        ],
        length: {
          number: 15,
          unit: 'minutes',
        },
      },
      {
        number: 6,
        step: 'Filling is made with cream cheese, ham and egg yolk, it tastes very soft, it is ideal for kids.',
        ingredients: [
          {
            id: 1017,
            name: 'cream cheese',
            localizedName: 'cream cheese',
            image: 'cream-cheese.jpg',
          },
          {
            id: 1125,
            name: 'egg yolk',
            localizedName: 'egg yolk',
            image: 'egg-yolk.jpg',
          },
          {
            id: 10151,
            name: 'Ham',
            localizedName: 'Ham',
            image: 'ham-whole.jpg',
          },
        ],
        equipment: [],
      },
    ],
  },
];

function FullRecipe() {
  const { isAuthenticated } = useAuth0();
  const { state } = useLocation();
  //Uncomment these 2 lines in productions
  // const apiURL = `https://api.spoonacular.com/recipes/${state.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`;
  // const [recipe, setRecipe] = useState();
  //Comment this line to use the api
  const [recipe, setRecipe] = useState(data);
  const [ingredientsOfRecipe, setIngredientsOfRecipe] = useState([]);
  const image = state.image;
  const [checkboxStatus, setCheckboxStatus] = useState(state.checkboxStatus);
  const [selected, setSelected] = useState(false);
  console.log('state: ', state.chosenIngredients);
  console.log('ingredientsOfRecipe: ', ingredientsOfRecipe);

  //Uncomment the useEffect & leave the state recipe empty to use real data from the API.
  // useEffect(() => {
  //   const fetchResponse = async () => {
  //     const response = await fetchRecipesApi(apiURL);
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
      console.log('i am result', result);
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
