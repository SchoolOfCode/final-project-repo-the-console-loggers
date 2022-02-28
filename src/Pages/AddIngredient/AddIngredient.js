import React, { useState } from 'react'
import InputBox from '../../components/Ui/InputBox/InputBox'
import Button from '../../components/Ui/Button/Button'
import { addFoodType } from '../../data/navigation'

function AddIngredient() {
  const [name, setName] = useState('')
  const [expDate, setExpDate] = useState([])
  const [quantity, setQuantity] = useState([])
  const [foodType, setFoodType] = useState('')

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
  async function handleSubmit(e) {
    e.preventDefault()
    // await fetch("URL", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name }),
    // })

    console.log(name, expDate, quantity, foodType)
  }
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
          />
          <InputBox
            className='datepicker-input, datepicker-toggle, datepicker-toggle-button'
            handleName={handleExpDate}
            text='Expiration Date'
            placeholder='E.g. 23/04/2022'
            type='date'
          />
          <InputBox
            handleName={handleQuantity}
            text='Quantity'
            placeholder='E.g. Kg, Portion...'
            type='text'
          />

          <label className='food-type'>Food Type</label>
          <select className='drop-down' handleName={handleFoodType}>
            {addFoodType.map((item) => {
              return <option food={item.food}>{item.food}</option>
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
