import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

//Pages
import Login from '../Login/Login';


function Recipe() {
    const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
     <h1>Recipe Page</h1>
       ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default Recipe;
