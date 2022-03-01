//Components
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';
//Data
import { shoppinglistData } from '../../data/shoppinglist';
//Pages
import Login from '../Login/Login';
//Utils
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function ShoppingList() {
  //Initial value for checkboxStatus
  const createCheckList = shoppinglistData.map((ingredient) => ({
    id: ingredient.id,
    isChecked: false,
  }));

  //State that storage if the checkboxes are check or not
  const [checkboxStatus, setCheckboxStatus] = useState(createCheckList);
  const { isAuthenticated, isLoading } = useAuth0();

  async function handleChange() {
    // fetch request to clear shopping list
    // const res = await fetch ("URL" ,{method: "DELETE"}) ;
    // const data = await res.json();

    console.log('Clear shopping list');
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-item' to='AddItem'>
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>

      {shoppinglistData.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            quantity={item.quantity}
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
