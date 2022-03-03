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
  //State that storage if the checkboxes are check or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [ingredientsList, setIngredientsList] = useState([]);

  let checkedItems;

  //Find out checked items number
  const checkedItemsNumber = () => {
    checkedItems = checkboxStatus.filter((item) => item.isChecked);
    console.log('checkedItems inside checkedItemsNumber: ', checkedItems);
    return checkedItems;
  };
  console.log('ingredientsList before handlechange', ingredientsList);

  function handleChange() {
    const handleCheckedItems = checkedItems.map((item) => {
      return deleteIngredient(user, item.id);
      // console.log('checkedItems.map', item);
      // return item;
    });
    console.log('checkedItems inside handleChange: ', checkedItems);
    console.log('handleCheckedItems inside handleChange: ', handleCheckedItems);

    //  setIngredientsList(!checkedItems)
    console.log('ingredientsList inside handlechange', ingredientsList);
    const updatedList = ingredientsList.filter(
      (item) => item.ingredient_id !== checkedItems[0].id
    );
    console.log('checkedItems[0] inside handlechange', checkedItems[0]);
    console.log('deleted inside handlechange', updatedList);

    setIngredientsList(updatedList);
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
      </Link>
      {ingredientsList.map((item) => {
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
      <div
        className={`buttons-container-home ${
          checkedItemsNumber() ? `button-vh-ten` : `disable`
        }`}
      >
        <Button
          text={`Cook (${checkedItemsNumber().length})`}
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
