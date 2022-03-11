//GENERIC FETCH FUNCTION
export async function fetchGet(ApiURLString) {
  const fetchResponse = await fetch(ApiURLString, {
    method: 'GET',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//WHEN APP LOAD CHECK IF USER EXIST IN THE DB
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
    : fetchGet(`${process.env.REACT_APP_BACKEND_URL}/${user.sub}/ingredients`);
}

//CREATE NEW INGREDIENT & NEW ITEM SCREENS
export async function addNewIngredient(fetchBody, apiUrl) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fetchBody),
  });

  await response.json();
}

//CREATE NEW USER IN THE DB
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
  await fetchResponse.json();
  //RETURN THE INGREDIENTS IN THE FRIDGE AFTER CREATE THE USER
  return fetchGet(`${process.env.REACT_APP_BACKEND_URL}/${user.sub}`);
}

//DELETE FRIDGE INGREDIENTS BY ID
export async function deteleFridgeIngredient(user, item) {
  // fetch request to clear shopping list
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/ingredients/${item}`,
    { method: 'DELETE' }
  );
  const data = await res.json();
  return data.allIngredients;
}

//DELETE ALL ITEMS IN THE SHOPPING LIST
export async function deleteShoppingList(apiUrl) {
  // fetch request to clear shopping list
  const res = await fetch(apiUrl, { method: 'DELETE' });
  return await res.json();
}
