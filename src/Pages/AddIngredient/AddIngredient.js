//Utils
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { addNewIngredient } from '../../Utils/Fetch';

//Components
import InputBox from '../../components/Ui/InputBox/InputBox';
import Button from '../../components/Ui/Button/Button';
import Modal from '../../components/Modal/Modal';
import Select from '../../components/Ui/Select/Select';

//Pages
import Login from '../Login/Login';

function AddIngredient() {
  const formInitialValue = {
    name: '',
    expDate: '',
    quantity: '',
    unit: 'unit',
  };

  const [form, setForm] = useState(formInitialValue);
  const { isAuthenticated, user } = useAuth0();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Success screen
  useEffect(() => {
    const timer = setTimeout(function ingredientTimeOut() {
      setIsModalOpen(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const checkMoreThanOneUnit = () => {
    return form.quantity > 1 ? `${form.unit}s` : form.unit;
  };

  const upperCaseName = () => {
    return form.name.charAt(0).toUpperCase() + form.name.slice(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Create the body
    const fetchBody = {
      ingredient_name: upperCaseName(),
      ingredient_exp_date: form.expDate,
      ingredient_quantity: `${form.quantity} ${checkMoreThanOneUnit()}`,
      ingredient_img: 'Something',
      is_checked: false,
      user_id: user.sub,
    };

    //Api url
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/ingredients`;
    await addNewIngredient(fetchBody, apiUrl);
    //Empty the form
    setForm(formInitialValue);
    setIsModalOpen(true);
  };

  return isAuthenticated ? (
    <div className='main-add-ingredient'>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen}>
          <h1>Ingredient added to fridge!</h1>
        </Modal>
      )}
      <h1 className='new-item'>ADD NEW ITEM</h1>
      <div className='add-item-card'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <InputBox
              id='name'
              handleName={handleForm}
              text='Name'
              placeholder='E.g. Honey Roasted Ham...'
              type='text'
              value={form.name}
              required={true}
            />
          </div>

          <div className='input-wrapper'>
            <InputBox
              id='expDate'
              className='datepicker-input, datepicker-toggle, datepicker-toggle-button'
              handleName={handleForm}
              text='Expiration Date'
              placeholder='E.g. 23/04/2022'
              type='date'
              value={form.expDate}
              required={true}
            />
          </div>
          <div className='quantity-input-wrapper'>
            <InputBox
              id='quantity'
              handleName={handleForm}
              text='Quantity'
              placeholder='Select the amount...'
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
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default AddIngredient;
