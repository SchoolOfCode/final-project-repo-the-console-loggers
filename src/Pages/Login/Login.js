import {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
   isAuthenticated && navigate('/home')
  },);
  const { loginWithRedirect, isAuthenticated} = useAuth0();
  return  (
    <div className="login-wrapper">
      <img
        src={process.env.PUBLIC_URL + '/assets/logo.svg'}
        className="logo"
        alt="Logo"
      ></img>
      <h1 className="name">App name</h1>
      <h2 className="tag-line">
        A recipe is a story that ends with a good meal..
      </h2>
      <button className="login-button" onClick={() => loginWithRedirect()}>
        Log In
      </button>
      <div className="signUp">
        Don’t have an account? <span>Sign up</span>
      </div>
    </div>
  ) 
}

export default Login;
