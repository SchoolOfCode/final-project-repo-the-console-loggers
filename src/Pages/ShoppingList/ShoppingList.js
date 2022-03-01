import { useAuth0 } from '@auth0/auth0-react';
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';
import Login from '../Login/Login';
import { shoppinglistData } from '../../data/shoppinglist';
import { Link } from 'react-router-dom'
import { useState } from 'react'



function ShoppingList() {
  const { isAuthenticated, isLoading } = useAuth0()
  const [buttonChecked, setButtonChecked] = useState([])

  async function handleChange(){
    // fetch request to clear shopping list
    // const res = await fetch ("URL" ,{method: "DELETE"}) ; 
    // const data = await res.json();
  
    console.log("Clear shopping list")
  }

  if (isLoading) {
    return <h1>Loading</h1>
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
            buttonChecked={buttonChecked}
            setButtonChecked={setButtonChecked}
          />
        )
      })}
      <div className='buttons-container-home'>
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
  )
}

export default ShoppingList
