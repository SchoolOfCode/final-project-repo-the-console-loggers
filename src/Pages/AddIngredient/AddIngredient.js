import React, { useEffect, useState } from 'react'
import InputBox from '../../components/Ui/InputBox/InputBox'
import Button from '../../components/Ui/Button/Button'
import { addFoodType } from '../../data/navigation'
import { useAuth0 } from '@auth0/auth0-react'

function AddIngredient({ user }) {
  const [name, setName] = useState('')
  const [expDate, setExpDate] = useState([])
  const [quantity, setQuantity] = useState([])
  const [foodType, setFoodType] = useState('')
  // const { isAuthenticated, isLoading, user } = useAuth0()

  function handleName(e) {
    setName(e.target.value)
  }
  function handleExpDate(e) {
    setExpDate(e.target.value)
  }
  function handleQuantity(e) {
    setQuantity(e.target.value)
  }
  function handleFoodType(e) {
    setFoodType(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    createIngredient()
    // await fetch("URL", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name }),
    // })

    console.log(name, expDate, quantity, foodType)
  }

  // useEffect(() => {
  async function createIngredient() {
    const response = await fetch(
      `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}/ingredients`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredient_name: name,
          ingredient_exp_date: expDate,
          ingredient_quantity: quantity,
          ingredient_img: 'Somthing',
          is_checked: false,
          user_id: user.sub,
        }),
      }
    )
    const data = await response.json()
    console.log('New Ingredient', data)
  }

  console.log('User from ingreients', user)
  // createIngredient()
  // })

  return (
    <div className='main-add-ingredient'>
      <h1 className='new-item'>ADD NEW ITEM</h1>
      <div className='add-item-card'>
        <form className='form' onSubmit={handleSubmit}>
          <InputBox
            handleName={handleName}
            text='Name'
            placeholder='E.g. Honey Roasted Ham...'
            type='text'
            value={name}
          />
          <InputBox
            className='datepicker-input, datepicker-toggle, datepicker-toggle-button'
            handleName={handleExpDate}
            text='Expiration Date'
            placeholder='E.g. 23/04/2022'
            type='date'
            value={expDate}
          />
          <InputBox
            handleName={handleQuantity}
            text='Quantity'
            placeholder='E.g. Kg, Portion...'
            type='text'
            value={quantity}
          />

          <label className='food-type'>Food Type</label>
          <select className='drop-down' onChange={handleFoodType}>
            {addFoodType.map((item) => {
              console.log(item)
              return (
                <option food={item.food} key={item.food}>
                  {item.food}
                </option>
              )
            })}
          </select>

          <Button
            className='add-button'
            text='Add new ingredient'
            backgroundColor='green'
            textColor='white'
            width='fullLength'
            icon='plus-icon'
          />
        </form>
      </div>
    </div>
  )
}

export default AddIngredient
