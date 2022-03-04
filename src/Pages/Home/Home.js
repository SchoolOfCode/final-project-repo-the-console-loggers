import { useAuth0 } from '@auth0/auth0-react';
//Utils
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';
import { deleteIngredient, fetchUsers } from '../../Utils/Fetch';
//Pages
import Login from '../Login/Login';

function Home() {
  //State that stores if the checkboxes are checked or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [ingredientsList, setIngredientsList] = useState([]);

  const checkedItems = checkboxStatus.filter((item) => item.isChecked); //replace checkedItemsNumber() so it can be used in map on line 23

  console.log('ingredientsList before handlechange', ingredientsList);

  async function handleChange() {
    checkedItems.map(async (item) => {
      return await deleteIngredient(user, item.id);
    });
    const checkedItemsIds = checkedItems.map((item) => item.id);
    //  setIngredientsList(!checkedItems)
    console.log('ingredientsList inside handlechange', ingredientsList);
    const updatedList = ingredientsList.filter(
      (item) => !checkedItemsIds.includes(item.ingredient_id) // as long as an id isn't equal to our checked ingredient id, display it
    );
    // console.log('checkedItems[0] inside handlechange', checkedItems[0]);
    // console.log('deleted inside handlechange', updatedList);

    setIngredientsList(updatedList);
    setCheckboxStatus(
      updatedList.map((item) => ({
        id: item.ingredient_id,
        isChecked: false,
      })) //
    );
  }
  console.log('ingredientsList outside handlechange', ingredientsList);

  useEffect(() => {
    const fetchResponse = async () => {
      const test = await fetchUsers(user);
      setIngredientsList(test);
      setCheckboxStatus(
        test.map((item) => ({
          id: item.ingredient_id,
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
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>{' '}
      <div className='divforcard'>
        {!ingredientsList.length
          ? 'Nothing in the fridge (New component to be done)'
          : ingredientsList.map((item) => {
              let date = new Date();
              let countDownDate = new Date(item.ingredient_exp_date).getTime();
              let now = date.getTime();
              let timeleft = countDownDate - now;
              let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

              let expDisplay;
              if (timeleft < 0) {
                expDisplay = `${item.ingredient_exp_date} | Expired`;
              } else {
                expDisplay = `${item.ingredient_exp_date} | ${days} days left`;
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
            })}
      </div>
      <div
        className={`buttons-container-home ${
          checkedItems.length > 0 ? `button-vh-ten` : `disable`
        }`}
      >
        <Button
          text={`Cook (${checkedItems.length})`}
          backgroundColor='yellow-button'
          textColor='white'
          width='percent-button-40'
        />
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
