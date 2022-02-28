import React from 'react'
import { useLocation } from 'react-router-dom'
import { welcomeMessages } from '../../data/navigation'

const Header = ({ user, isAuthenticated, isLoading }) => {
  let location = useLocation()
  return (
    <header className='header'>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className='avatar'>
            <img src={user.picture} alt='Avatar' />
          </div>
          <div className='welcome-msg'>
            <p className='welcome-name'>
              Welcome <span>{user.name}</span>
            </p>
            <p className='catch-phrase'>
              {welcomeMessages.map(
                (item) => location.pathname === item.path && item.message
              )}
            </p>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
