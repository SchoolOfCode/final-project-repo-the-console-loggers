import React, { useState } from 'react'
import InputBox from '../../components/Ui/InputBox/InputBox'
import Button from '../../components/Ui/Button/Button'
import { addFoodType } from '../../data/navigation'

function AddItem() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState([])
  const [foodType, setFoodType] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }
  function handleQuantity(e) {
    setQuantity(e.target.value)
  }
  function handleFoodType(e) {
    setFoodType(e.target.value)
  }
  
  async function deleteItem(e) {
    e.preventDefault()
    console.log(name, quantity, foodType)
  }

  return (
    <div className='main-add-item'>
      <h1 className='new-item'>ADD NEW ITEM</h1>
      <div className='add-item-card'>
        <form className='form' onSubmit={deleteItem}>
          <InputBox
            handleName={handleName}
            text='Name'
            placeholder='E.g. Honey Roasted Ham...'
            type='text'
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
            text='Add New Item'
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

export default AddItem