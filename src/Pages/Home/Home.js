
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../../components/Card/Card";
import GreenBanner from "../../components/GreenBanner/GreenBanner";
import Button from "../../components/Ui/Button/Button";
import Login from "../Login/Login";
import { fridgeIngredients } from '../../data/fridgetIngredients';
import { Link } from "react-router-dom";


function Home() {
  const { isAuthenticated, isLoading } = useAuth0();

  //Date variables
  let date = new Date();
  let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <main className="main-home">
      <Link className="add-ingredient" to="AddIngredient">
        <GreenBanner text="+ ADD NEW ITEM" />
      </Link>
      {fridgeIngredients.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            expdate={item.expiryDate}
            quantity={item.quantity}
          >
            <span
              className={`expiry-dot ${
                today >= item.expiryDate ? "red" : "green"
              }`}
            ></span>
          </Card>
        );
      })}
      <div className="buttons-container-home">
        <Button
          text="Cook"
          backgroundColor="transparent"
          textColor="green"
          width="halfLength"
        />
        <Button
          text="Delete"
          backgroundColor="red-button"
          textColor="white"
          width="halfLength"
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
