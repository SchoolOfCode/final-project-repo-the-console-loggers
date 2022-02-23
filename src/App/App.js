//Component
import Login from "../Pages/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../Pages/Home/Home";

import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header";
import Router from "../Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const { isAuthenticated, isLoading } = useAuth0();
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Router />
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
