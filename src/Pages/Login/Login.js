import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    isAuthenticated && navigate('/Home')
    console.log('user', user)
  })

  return !isLoading ? (
    <div className='login-wrapper'>
      <img
        src={process.env.PUBLIC_URL + '/assets/logo.svg'}
        className='logo'
        alt='Logo'
      ></img>
      <h1 className='name'>App name</h1>
      <h2 className='tag-line'>
        A recipe is a story that ends with a good meal..
      </h2>
      <button className='login-button' onClick={() => loginWithRedirect()}>
        Log In
      </button>
      <div className='signUp'>
        Don’t have an account? <span>Sign up</span>
      </div>
    </div>
  ) : (
    'Loading'
  )
}

export default Login
