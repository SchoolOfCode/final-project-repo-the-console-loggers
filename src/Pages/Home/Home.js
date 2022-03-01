import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import GreenBanner from '../../components/GreenBanner/GreenBanner'
import Button from '../../components/Ui/Button/Button'
import { fridgeIngredients } from '../../data/fridgetIngredients'
import Login from '../Login/Login'
import { useState } from 'react'

function Home() {
  const { isAuthenticated, isLoading } = useAuth0()
  const [buttonChecked, setButtonChecked] = useState([])
  const [disable, setDisable] = useState(false)


  //Date variables
  let date = new Date()
  let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  if (isLoading) {
    return <h1>Loading</h1>
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-ingredient' to='AddIngredient'>
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>
      {fridgeIngredients.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            expdate={item.expiryDate}
            quantity={item.quantity}
            buttonChecked={buttonChecked}
            setButtonChecked={setButtonChecked}
          >
            <span
              className={`expiry-dot ${
                today >= item.expiryDate ? 'red' : 'green'
              }`}
            ></span>
          </Card>
        )
      })}
      <div
        className={`buttons-container-home ${
          buttonChecked.length ? 'button-vh-ten' : null
        }`}>
         
         {/* {buttonChecked.length ?
       
       <div
         className='buttons-container-home button-vh-ten' >
         : <div disabled> 
         } */}
      
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
  )
}

export default Home
