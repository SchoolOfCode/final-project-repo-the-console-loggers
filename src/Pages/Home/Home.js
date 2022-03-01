//Card
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';
//Data
import { fridgeIngredients } from '../../data/fridgetIngredients';
//Pages
import Login from '../Login/Login';
//Utils
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Home() {
  //Initial value for checkboxStatus
  const createCheckList = fridgeIngredients.map((ingredient) => ({
    id: ingredient.id,
    isChecked: false,
  }));
  const { isAuthenticated, isLoading } = useAuth0();
  const [checkboxStatus, setCheckboxStatus] = useState(createCheckList);

  //Find out checked items number
  const checkedItemsNumber = () => {
    const checkedItems = checkboxStatus.filter((item) => item.isChecked);
    return checkedItems.length;
  };

  //Loading screen to be done
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-ingredient' to='AddIngredient'>
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>
      {fridgeIngredients.map((item) => {
        let date = new Date();
        let countDownDate = new Date(item.expiryDate).getTime();
        let now = date.getTime();
        let timeleft = countDownDate - now;
        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let expDisplay;
        if (timeleft < 0) {
          expDisplay = `${item.expiryDate} | Expired`;
        } else {
          expDisplay = `${item.expiryDate} | ${days} days left`;
        }

        return (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            expdate={expDisplay}
            quantity={item.quantity}
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
