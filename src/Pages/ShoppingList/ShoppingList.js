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
import { fetchUsersShopping } from '../../Utils/Fetch';

function ShoppingList() {
  //State that storage if the checkboxes are check or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [shopping, setShopping] = useState([]);

  async function handleChange() {
    // fetch request to clear shopping list
    const res = await fetch(
      `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}/shopping`,
      { method: 'DELETE' }
    );
    const data = await res.json();
    console.log(data);
    setShopping([]);
  }

  useEffect(() => {
    const fetchResponse = async () => {
      const test = await fetchUsersShopping(user);
      console.log(test);
      setShopping(test);
      setCheckboxStatus(
        test.map((item) => ({
          id: item.item_id,
          isChecked: false,
        }))
      );
    };

    isAuthenticated && fetchResponse();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-item' to='AddItem'>
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>

      {shopping.map((item) => {
        return (
          <Card
            id={item.item_id}
            key={item.item_id}
            name={item.item_name}
            quantity={item.item_quantity}
            checkboxStatus={checkboxStatus}
            setCheckboxStatus={setCheckboxStatus}
          />
        );
      })}
      <div className='buttons-container-shoppinglist'>
        <Button
          handleClick={handleChange}
          text='Clear shopping list'
          backgroundColor='red-button'
          textColor='white'
          width='fullLength'
          icon='bin'
        />
      </div>
    </main>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default ShoppingList;
