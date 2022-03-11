//Components
import { useAuth0 } from '@auth0/auth0-react';
//Utils
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Ui/Button/Button';
import { deleteShoppingList, fetchShoppingList } from '../../Utils/Fetch';
//Pages
import Login from '../Login/Login';

function ShoppingList() {
  //State that storage if the checkboxes are check or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [shopping, setShopping] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = async () => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/shopping`;
    await deleteShoppingList(apiUrl, user);
    setShopping([]);
    setIsModalOpen(false);
  };

  const updated = [...shopping]
    .map((item, i) => {
      item.is_checked = checkboxStatus.length && checkboxStatus[i].isChecked;
      return item;
    })
    .sort((a, b) => (a.is_checked > b.is_checked ? 1 : -1));

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetchShoppingList(user);
      setShopping(response);

      setCheckboxStatus(
        response.map((item) => ({
          id: item.item_id,
          isChecked: false,
        }))
      );
    };

    isAuthenticated && fetchResponse();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <>
      <main className='main-home'>
        {!shopping.length ? null : (
          <Link className='add-item' to='AddItem'>
            <GreenBanner text='+ ADD NEW ITEM' />
          </Link>
        )}
        <div className='divforcardforshopping'>
          {!shopping.length ? (
            <EmptyScreen
              title='No items in the shopping list'
              icon='empty-list'
              subText='Add some items to your shopping '
              highlight='list'
              linkTo='./AddItem'
            />
          ) : (
            updated.map((item) => {
              return (
                <Card
                  id={item.item_id}
                  key={item.item_id}
                  name={item.item_name}
                  quantity={item.item_quantity}
                  checkboxStatus={checkboxStatus}
                  setCheckboxStatus={setCheckboxStatus}
                  // onClick={updateList}
                />
              );
            })
          )}
        </div>
        {!shopping.length ? null : (
          <div className='buttons-container-shoppinglist'>
            <Button
              handleClick={() => setIsModalOpen(true)}
              text='Clear shopping list'
              backgroundColor='red-button'
              textColor='white'
              width='fullLength'
              icon='bin'
            />
          </div>
        )}
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen}>
            <h1>
              Are you sure you want to remove all the items from the list?
            </h1>
            <div className='button-container'>
              <Button
                text='Yes, I&#39;m sure'
                backgroundColor='red-button'
                textColor='white'
                handleClick={handleChange}
              />
              <Button
                text='Cancel'
                backgroundColor='transparent'
                textColor='green'
                handleClick={() => setIsModalOpen(false)}
              />
            </div>
          </Modal>
        )}
      </main>
    </>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default ShoppingList;
