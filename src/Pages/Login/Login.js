import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/RotatingLogo/RotatingLogo';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated && navigate('/Home');
  });
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  return !isLoading ? (
    <div className='logo-wrapper'>
      <Logo />
      <div className='login-wrapper'>
        <h1 className='name'>Fridgeful</h1>
        <h2 className='tag-line'>Buy wisely, cook Fridgefully, eat it all</h2>
        <button className='login-button' onClick={() => loginWithRedirect()}>
          Log In
        </button>
        <div className='signUp'>
          Don’t have an account?{' '}
          <span onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
            Sign up
          </span>
        </div>
      </div>
    </div>
  ) : (
    'Loading'
  );
}

export default Login;
