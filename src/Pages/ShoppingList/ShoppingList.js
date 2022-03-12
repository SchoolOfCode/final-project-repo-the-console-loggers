//Utils
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteShoppingList, fetchGet } from '../../Utils/Fetch';

//Components
import { useAuth0 } from '@auth0/auth0-react';
import Card from '../../components/Card/Card';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import BottonSheet from '../../components/BottonSheet/BottonSheet';
import Button from '../../components/Ui/Button/Button';

//Pages
import Login from '../Login/Login';
import Alert from '../../components/Alert/Alert';

function ShoppingList() {
  //State that storage if the checkboxes are check or not
  const [checkboxStatus, setCheckboxStatus] = useState([]);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [shopping, setShopping] = useState([]);
  const [isBottonSheetOpen, setIsBottonSheetOpen] = useState(false);
  const [bottonSheetAnimation, setbottonSheetAnimation] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleChange = async () => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/${user.sub}/shopping`;
    await deleteShoppingList(apiUrl, user);
    setShopping([]);
    setbottonSheetAnimation(true);
    setIsAlertOpen(true);
  };

  const updated = [...shopping]
    .map((item, i) => {
      item.is_checked = checkboxStatus.length && checkboxStatus[i].isChecked;
      return item;
    })
    .sort((a, b) => (a.is_checked > b.is_checked ? 1 : -1));

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/${
      user && user.sub
    }/shopping`;
    const fetchResponse = async () => {
      const response = await fetchGet(apiUrl);
      setShopping(response.payload);

      setCheckboxStatus(
        response.payload.map((item) => ({
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
              handleClick={() => setIsBottonSheetOpen(true)}
              text='Clear shopping list'
              backgroundColor='red-button'
              textColor='white'
              width='fullLength'
              icon='bin'
            />
          </div>
        )}
        {isBottonSheetOpen && (
          <BottonSheet
            setIsBottonSheetOpen={setIsBottonSheetOpen}
            bottonSheetAnimation={bottonSheetAnimation}
            setbottonSheetAnimation={setbottonSheetAnimation}
          >
            <div className='bottonsheet-children-container'>
              <p>
                Are you sure you want to remove all the items from the list?
              </p>
              <div className='bottonsheet-button-container'>
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
                  handleClick={() => setbottonSheetAnimation(true)}
                />
              </div>
            </div>
          </BottonSheet>
        )}
        {isAlertOpen && (
          <Alert isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen}>
            <p>The shopping list has been cleared</p>
          </Alert>
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
