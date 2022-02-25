import { useAuth0 } from '@auth0/auth0-react';
import Card from '../../components/Card/Card';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import Button from '../../components/Ui/Button/Button';
import Login from '../Login/Login';
import { fridgeIngredients } from '../../data/navigation';

function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className="main-home">
      <GreenBanner text="+ ADD NEW ITEM" />

      {fridgeIngredients.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            expdate={item.expiryDate}
            quantity={item.quantity}
          />
        );
      })}
      <div className="buttons-container-home">
        <Button text="Cook" backgroundColor="transparent" textColor="green" />
        <Button text="Delete" backgroundColor="red-button" textColor="white" />
      </div>
    </main>
  ) : (
    <div className="app">
      <Login />
    </div>
  );
}

export default Home;
