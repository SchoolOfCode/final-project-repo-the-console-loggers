//Utils
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  deteleFridgeIngredient,
  fetchGet,
  createNewElement,
} from '../../Utils/Fetch';

//Components
import Card from '../../components/Card/Card';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';

//Pages
import Login from '../Login/Login';

function Home() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  // State that stores if the checkboxes are checked or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  // State that stores ingredients in my fridge
  const [ingredientsList, setIngredientsList] = useState([]);

  // replace checkedItemsNumber() so it can be used in map on line 23
  const checkedItems = checkboxStatus.filter((item) => item.isChecked);
  console.log(checkedItems);

  // when you clicked 'delete button'
  async function handleChange() {
    checkedItems.map(async (item) => {
      return await deteleFridgeIngredient(user, item.id);
    });
    const checkedItemsIds = checkedItems.map((item) => item.id);
    const updatedList = ingredientsList.filter(
      (item) => !checkedItemsIds.includes(item.ingredient_id) // as long as an id isn't equal to our checked ingredient id, display it
    );

    setIngredientsList(updatedList);
    setCheckboxStatus(
      updatedList.map((item) => ({
        id: item.ingredient_id,
        name: item.ingredient_name,
        isChecked: false,
      })) //
    );
  }

  useEffect(() => {
    // CHECK IF USER EXIST
    const fetchResponse = async () => {
      const response = await fetchGet(
        `${process.env.REACT_APP_BACKEND_URL}/${user.sub}`
      );
      const result =
        response.payload.length === 0
          ? //IF NOT: CREATE THE NEW USER IN THE DATABASE
            createNewElement(
              {
                auth0_user_id: user.sub,
                email: user.email,
                name: user.name,
                nickname: user.nickname,
                picture: user.picture,
              },
              process.env.REACT_APP_BACKEND_URL
            )
          : //ELSE, FETCH INGREDIENTS
            await fetchGet(
              `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/ingredients`
            );

      setIngredientsList(result.payload);
      setCheckboxStatus(
        result.payload.map((item) => ({
          id: item.ingredient_id,
          name: item.ingredient_name,
          isChecked: false,
        }))
      );
    };

    isAuthenticated && fetchResponse();
  }, [isAuthenticated, user]);

  //Loading screen to be done
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-ingredient' to='AddIngredient'>
        {ingredientsList.length ? <GreenBanner text='+ ADD NEW ITEM' /> : null}
      </Link>
      <div className='divforcard'>
        {!ingredientsList.length ? (
          <EmptyScreen
            title='Nothing in the fridge!'
            icon='empty-fridge'
            subText='What about adding some'
            highlight='ingredients?'
            linkTo='AddIngredient'
          />
        ) : (
          ingredientsList.map((item) => {
            let date = new Date();
            let countDownDate = new Date(item.ingredient_exp_date).getTime();
            let now = date.getTime();
            let timeleft = countDownDate - now;
            let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

            let expDisplay;
            if (timeleft < 0) {
              expDisplay = `Expired`;
            } else {
              expDisplay = `${days} days left`;
            }

            return (
              <Card
                id={item.ingredient_id}
                key={item.ingredient_id}
                name={item.ingredient_name}
                expdate={expDisplay}
                quantity={item.ingredient_quantity}
                checkboxStatus={checkboxStatus}
                setCheckboxStatus={setCheckboxStatus}
              >
                <span
                  className={`expiry-dot ${timeleft > 0 ? 'green' : 'red'}`}
                ></span>
              </Card>
            );
          })
        )}
      </div>
      <div
        className={`buttons-container-home ${
          checkedItems.length > 0 ? `button-vh-ten` : `disable`
        }`}
      >
        <Link
          className='button-home-yellow'
          to='/RecipeList'
          state={{ checkboxStatus }}
        >
          <Button
            text={`Cook (${checkedItems.length})`}
            backgroundColor='yellow-button'
            textColor='white'
            width='percent-button-40'
          />
        </Link>
        <Button
          handleClick={handleChange}
          text='Delete'
          backgroundColor='red-button'
          textColor='white'
          width='percent-button-40'
        />
      </div>
    </main>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default Home;