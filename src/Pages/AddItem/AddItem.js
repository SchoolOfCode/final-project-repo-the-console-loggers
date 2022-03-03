import React, { useState } from 'react';
import InputBox from '../../components/Ui/InputBox/InputBox';
import Button from '../../components/Ui/Button/Button';
import { addFoodType } from '../../data/navigation';
import { useAuth0 } from '@auth0/auth0-react';

function AddItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState([]);
  const { user } = useAuth0();

  function handleName(e) {
    setName(e.target.value);
  }
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  // async function deleteItem(e) {
  //   e.preventDefault()
  //   console.log(name, quantity)
  // }

  async function addNewShopping(e) {
    e.preventDefault();
    const response = await fetch(
      `https://four-week-project-soc.herokuapp.com/api/v1/user/${user.sub}/shopping`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_name: name,
          item_quantity: quantity,
          is_checked: false,
          user_id: user.sub,
        }),
      }
    );

    const data = await response.json();
    console.log('shopping item : ', data);
    setName('');
    setQuantity('');
  }

  return (
    <div className='main-add-item'>
      <h1 className='new-item'>ADD NEW ITEM</h1>
      <div className='add-item-card'>
        <form className='form' onSubmit={addNewShopping}>
          <InputBox
            handleName={handleName}
            text='Name'
            placeholder='E.g. Honey Roasted Ham...'
            type='text'
            value={name}
          />

          <InputBox
            handleName={handleQuantity}
            text='Quantity'
            placeholder='E.g. Kg, Portion...'
            type='text'
            value={quantity}
          />

          <label className='food-type'>Food Type</label>
          <select className='drop-down'>
            {addFoodType.map((item) => {
              return (
                <option key={item.food} food={item.food}>
                  {item.food}
                </option>
              );
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
  );
}

export default AddItem;
