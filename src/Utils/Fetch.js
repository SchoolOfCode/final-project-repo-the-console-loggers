export async function fetchUsers(user) {
  const fetchResponse = await fetch(
    `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  console.log(user);
  return response.payload.length === 0
    ? putNewUser(user)
    : fetchIngredients(user);
}

///Get ingredients
async function fetchIngredients(user) {
  const fetchResponse = await fetch(
    `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}/ingredients`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  return response.payload;
}

//Post new user
async function putNewUser(user) {
  const fetchResponse = await fetch(
    'https://four-week-project-soc.herokuapp.com/api/v1/user',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth0_user_id: user.sub,
        email: user.email,
        name: user.name,
        nickname: user.nickname,
        picture: user.picture,
      }),
    }
  );
  //Store the response.
  await fetchResponse.json();
  return fetchIngredients(user);
}

//Fetch Shopping Ingredients

async function fetchShoppingIngredients(user) {
  const fetchResponse = await fetch(
    `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}/shopping`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  return response.payload;
}

export async function fetchUsersShopping(user) {
  const fetchResponse = await fetch(
    `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}`,
    {
      method: 'GET',
    }
  );
  //Store the response.
  const response = await fetchResponse.json();
  return response.payload.length === 0
    ? putNewUser(user)
    : fetchShoppingIngredients(user);
}
