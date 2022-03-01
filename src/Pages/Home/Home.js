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
  //Initial value for buttonChecked
  const createCheckList = fridgeIngredients.map((ingredient) => ({
    id: ingredient.id,
    isChecked: false,
  }));
  const { isAuthenticated, isLoading } = useAuth0();
  const [buttonChecked, setButtonChecked] = useState(createCheckList);

  //Date variables

  let date = new Date()
  // let today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`


  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-ingredient' to='AddIngredient'>
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>
      {fridgeIngredients.map((item) => {

        let countDownDate = new Date(item.expiryDate).getTime()
        let now = date.getTime()
        let timeleft = countDownDate - now
        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
        let expDisplay;
        if (timeleft < 0) {
          expDisplay = `${item.expiryDate} | Expired`
        } else {
          expDisplay = `${item.expiryDate} | ${days} days left`
        }

          return (
            <Card
              id={item.id}
              key={item.id}
              name={item.name}
              expdate={expDisplay}
              quantity={item.quantity}
              buttonChecked={buttonChecked}
              setButtonChecked={setButtonChecked}
            >
              <span
                className={`expiry-dot ${
                  timeleft > 0 ? 'green' : 'red'
                }`}
              ></span>
            </Card>
          )
      })}
      <div
        className={`buttons-container-home ${
          buttonChecked.length ? `button-vh-ten` : `disable`
        }`}
      >
        <Button
          text={`Cook ${
            buttonChecked.length === 0 ? '' : `(${buttonChecked.length})`
          }`}
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
