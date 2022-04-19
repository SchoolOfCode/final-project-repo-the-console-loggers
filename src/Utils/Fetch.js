//GENERIC GET FETCH FUNCTION
export async function fetchGet(ApiURLString) {
  const fetchResponse = await fetch(ApiURLString, {
    method: 'GET',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//CREATE NEW INGREDIENT & NEW ITEM SCREENS
export async function createNewElement(fetchBody, apiUrl) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fetchBody),
  });
  await response.json();
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
