import { useAuth0 } from '@auth0/auth0-react';
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';
import Login from '../Login/Login';
import { shoppinglistData } from '../../data/shoppinglist';

function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className="main-home">
      <GreenBanner text="+ ADD NEW ITEM" />

      {shoppinglistData.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            quantity={item.quantity}
          />
        );
      })}
      <div className="buttons-container-home">
        <Button
          text="Clear shopping list"
          backgroundColor="red-button"
          textColor="white"
          width="fullLength"
          icon="bin"
        />
      </div>
    </main>
  ) : (
    <div className="app">
      <Login />
    </div>
  );
}

export default Home;
