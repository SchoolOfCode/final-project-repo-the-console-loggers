import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
//Pages
import Login from '../Login/Login';

function FullRecipe() {
  const { isAuthenticated } = useAuth0();
	return isAuthenticated ? (
    <main className='main-full-recipe '>FullRecipe</main>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default FullRecipe
