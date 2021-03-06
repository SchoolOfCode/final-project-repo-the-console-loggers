//Utils
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createNewElement } from '../../Utils/Fetch';

//Components
import InputBox from '../../components/Ui/InputBox/InputBox';
import Button from '../../components/Ui/Button/Button';
import Select from '../../components/Ui/Select/Select';
import Alert from '../../components/Alert/Alert';

//Pages
import Login from '../Login/Login';

function AddItem() {
  const formInitialValue = {
    name: '',
    quantity: '',
    unit: 'unit',
  };

  const [form, setForm] = useState(formInitialValue);
  const { isAuthenticated, user } = useAuth0();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const checkMoreThanOneUnit = () => {
    return form.quantity > 1 ? `${form.unit}s` : form.unit;
  };

  const upperCaseName = () => {
    return form.name.charAt(0).toUpperCase() + form.name.slice(1);
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  async function addNewItemToShoppingList(e) {
    e.preventDefault();

    //Create the body
    const fetchBody = {
      item_name: upperCaseName(),
      item_quantity: `${form.quantity} ${checkMoreThanOneUnit()}`,
      is_checked: false,
      user_id: user.sub,
    };

    //Api url
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/shopping`;
    await createNewElement(fetchBody, apiUrl);

    //Open the form
    setForm(formInitialValue);
    setIsAlertOpen(true);
  }

  return isAuthenticated ? (
    <>
      <div className='main-add-item'>
        {isAlertOpen && (
          <Alert isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen}>
            <p>Item added to the shopping list</p>
          </Alert>
        )}
        <h1 className='new-item'>ADD NEW ITEM</h1>
        <div className='add-item-card'>
          <form className='form' onSubmit={addNewItemToShoppingList}>
            <InputBox
              id='name'
              handleName={handleForm}
              text='Name'
              placeholder='E.g. Honey Roasted Ham...'
              type='text'
              value={form.name}
              required={true}
            />
            <div className='quantity-input-wrapper'>
              <InputBox
                id='quantity'
                handleName={handleForm}
                text='Quantity'
                placeholder='E.g. Kg, Portion...'
                type='text'
                value={form.quantity}
                required={true}
              />
              <Select value={form.unit} handleUnits={handleForm} id='unit'>
                <option value='unit'>Unit</option>
                <option value='portion'>Portion</option>
                <option value='kg'>Kg</option>
                <option value='g'>g</option>
                <option value='piece'>Pieces</option>
                <option value='ltr'>Litre</option>
              </Select>
            </div>
            <Button
              style={{ marginTop: '2rem' }}
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
    </>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default AddItem;
