export async function checkIfUserExist(user) {
  const fetchResponse = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${user.sub}`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  return response.payload.length === 0
    ? createNewUserInDB(user)
    : fetchIngredients(user);
}

///Get ingredients
async function fetchIngredients(user) {
  const fetchResponse = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/ingredients`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  return response.payload;
}

export async function deleteIngredient(user, item) {
  // fetch request to clear shopping list
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/ingredients/${item}`,
    { method: 'DELETE' }
  );
  const data = await res.json();
  return data.allIngredients;
}

export async function deleteShoppingList(apiUrl) {
  // fetch request to clear shopping list
  const res = await fetch(apiUrl, { method: 'DELETE' });
  return await res.json();
}

//Post new user
async function createNewUserInDB(user) {
  const fetchResponse = await fetch(process.env.REACT_APP_BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      auth0_user_id: user.sub,
      email: user.email,
      name: user.name,
      nickname: user.nickname,
      picture: user.picture,
    }),
  });
  //Store the response.
  await fetchResponse.json();
  return fetchIngredients(user);
}

//FETCH SHOPPING LIST INGREDIENTS BY USER
export async function fetchShoppingList(user) {
  const fetchResponse = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/shopping`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  return response.payload;
}

//Fetch spooncular API & Recipe by id
export async function fetchRecipesApi(ApiURLString) {
  const fetchResponse = await fetch(ApiURLString, {
    method: 'GET',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//POST NEW INGREDIENT & NEW ITEM
export async function addNewIngredient(fetchBody, apiUrl) {
  console.log(fetchBody);
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fetchBody),
  });

  await response.json();
}
