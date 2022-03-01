import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import GreenBanner from '../../components/GreenBanner/GreenBanner'
import Button from '../../components/Ui/Button/Button'
import { fridgeIngredients } from '../../data/fridgetIngredients'
import Login from '../Login/Login'
import { useEffect, useState } from 'react'

function Home() {
  const { isAuthenticated, isLoading, user } = useAuth0()
  const [buttonChecked, setButtonChecked] = useState([])
  // const [newUser, setNewUser] = useState({
  //   auth0_user_id: '',
  //   email: '',
  //   name: '',
  //   nickname: '',
  //   picture: '',
  // })

  // useEffect(() => {
  //   function updateUser() {
  //     setNewUser({
  //       auth0_user_id: user.sub,
  //       email: user.email,
  //       name: user.name,
  //       nickname: user.nickname,
  //       picture: user.picture,
  //     })
  //   }
  //   updateUser()
  // }, [])

  // console.log(newUser)

  //Date variables
  let date = new Date()
  let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  useEffect(() => {
    async function sendUserData() {
      try {
        const response = await fetch(
          'https://four-week-project-soc.herokuapp.com/api/v1/user',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              auth0_user_id: user.sub,
              email: user.email,
              name: user.name,
              nickname: user.nickname,
              picture: user.picture,
            }),
          }
        )
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    sendUserData()
  })

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
  )
}

export default Home
