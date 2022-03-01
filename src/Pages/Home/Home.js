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

  //Date variables
  let date = new Date()
  let today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

  const curYear = date.getFullYear()
  const curMonth = date.getMonth()+1
  const curDay = date.getDay()-1
  
  if (isLoading) {
    return <h1>Loading</h1>
  }
  return isAuthenticated ? (
    <main className='main-home'>
      <Link className='add-ingredient' to='AddIngredient'>
        <GreenBanner text='+ ADD NEW ITEM' />
      </Link>
      {fridgeIngredients.map((item) => {

        const separated = item.expiryDate.split("/");
        const expYear = separated[0];
        const expMonth = separated[1];
        const expDay = separated[2];
        /* console.log(date)
        console.log(today)
        console.log(curYear)
        console.log(curMonth)
        console.log(curDay) */


        if (expYear > curYear) {
          console.log(`${expYear}/${expMonth}/${expDay} : year is in date`)
        } 
        
        if (expYear === curYear ){
           if (expMonth > curMonth) { 
            console.log('month is in date')
          }}
          
          if (expYear === curYear && expMonth === curMonth) {
            if (expDay > curDay) {
              console.log('day is in date')
            } else if (expDay <= curDay) {
              console.log('day is out of date')
            }
          } else if (expMonth < curMonth) {
            console.log('month is out of date')
          }
        
        
        if (expYear < curYear){
          console.log("year is out of date")
        } 
        
        
        
/*         
        
         && expMonth > curMonth) {
          console.log(`${expYear}/${expMonth}/${expDay} :month is in date and current month is ${curMonth}`)
        } else if (expYear === curYear && expMonth === curMonth && expDay > curDay) {
          console.log(
            `${expYear}/${expMonth}/${expDay} :day is in date and current month is ${curMonth}`
          )
        } else {
          console.log(
            `${expYear}/${expMonth}/${expDay} :expired and current month is ${curMonth}`
          )
        } */
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
      <div className={`buttons-container-home ${buttonChecked.length ? `button-vh-ten` : `disable`}`}>
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
