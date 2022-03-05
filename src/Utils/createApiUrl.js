export const createApiURL = (chosenIngredients) => {
  const apiURL = process.env.REACT_APP_API_URL;
  const filter = 'findByIngredients';
  const ingredients = composeApiIngredients(chosenIngredients);
  const apiKey = process.env.REACT_APP_API_KEY;
  const ItemsNumber = 10;

  //Final Api URL
  return `https://${apiURL}${filter}?ingredients=${ingredients}&number=${ItemsNumber}&apiKey=${apiKey}`;
};

const composeApiIngredients = (chosenIngredients) => {
  const extractNames = chosenIngredients.map((ingredient) => ingredient.name);
  //Store the final string
  let finalIngredientsURL = '';

  for (let index = 0; index < extractNames.length; index++) {
    switch (true) {
      //Create the string if there is only 1 ingredient selected
      case chosenIngredients.length === 1:
        finalIngredientsURL += `${extractNames[index]}`;
        break;
      //Create the string for the first ingredient
      case index === 0:
        finalIngredientsURL += `${extractNames[index]},`;
        break;
      //Create the string for the last ingredient
      case index === extractNames.length - 1:
        finalIngredientsURL += `+${extractNames[index]}`;
        break;
      //Create the string for the other ingredients
      default:
        finalIngredientsURL += `+${extractNames[index]},`;
        break;
    }
  }
  return finalIngredientsURL;
};
