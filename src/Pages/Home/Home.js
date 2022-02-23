import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";

function Home() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <>
      <main className="main-home">
        <div className="addNewIngredient">Add new Item</div>
        <h1>hello</h1>
      </main>
    </>
  ) : (
    <div className="app">
      <Login />
    </div>
  );
}

export default Home;
