import React, { useState, useEffect } from 'react';
import InputBox from '../../components/Ui/InputBox/InputBox';
import Button from '../../components/Ui/Button/Button';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from '../../components/Modal/Modal';
//Pages
import Login from '../Login/Login';

function AddItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState([]);
  const { isAuthenticated, user } = useAuth0();
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    const timer = setTimeout(function ingredientTimeOut() {
      setIsModalOpen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

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

return isAuthenticated ? (
  <div className='main-add-item'>
    {isModalOpen && (
      <Modal isModalOpen={isModalOpen}>
        <h1>Item added to shopping list!</h1>
      </Modal>
    )}
    <h1 className='new-item'>ADD NEW ITEM</h1>
    <div className='add-item-card'>
      <form className='form' onSubmit={addNewShopping}>
        <InputBox
          handleName={handleName}
          text='Name'
          placeholder='E.g. Honey Roasted Ham...'
          type='text'
          value={name}
          required={true}
        />

        <InputBox
          handleName={handleQuantity}
          text='Quantity'
          placeholder='E.g. Kg, Portion...'
          type='text'
          value={quantity}
          required={true}
        />

        <Button
          style={{ marginTop: '2rem' }}
          className='add-button'
          text='Add New Item'
          backgroundColor='green'
          textColor='white'
          width='fullLength'
          icon='plus-icon'
          handleClick={() => setIsModalOpen(true)}
        />
      </form>
    </div>
  </div>
) : (
  <div className='app'>
    <Login />
  </div>
);
}

export default AddItem;
