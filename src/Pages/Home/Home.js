import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import Login from '../Login/Login';

function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuthenticated ? (
    <>
      <Header user={user} />
      <main className="main-home">
        <div className="addNewIngredient">Add new Item</div>
      </main>
      <nav className="nav-menu">
        Home - Ingredients- Shopping list - Settings
      </nav>
    </>
  ) : (
    <div className="app">
      <Login />
    </div>
  );
}

export default Home;
