//Components
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';

//Pages
import Login from '../Login/Login';
//Utils
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../Utils/Fetch';

function Home() {
  //State that storage if the checkboxes are check or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [ingredientsList, setIngredientsList] = useState([]);

  //Find out checked items number
  const checkedItemsNumber = () => {
    const checkedItems = checkboxStatus.filter((item) => item.isChecked);
    return checkedItems.length;
  };

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
          text={`Cook (${checkedItemsNumber()})`}
          backgroundColor='yellow-button'
          textColor='white'
          width='percent-button-40'
        />
        <Button
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
