//Component
import Login from '../../Pages/Login/Login';
import Nav from '../Nav/Nav';
import Home from '../../Pages/Home/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Router from '../../Router/Router';

function App() {
  // const { isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;
