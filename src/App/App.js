//Component
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Router from '../Router/Router'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  return (
    <BrowserRouter>
      <div>
        {isAuthenticated && (
          <Header
            user={user}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
          />
        )}
        <Router user={user} />
        {isAuthenticated && <Nav />}
      </div>
    </BrowserRouter>
  )
}

export default App
