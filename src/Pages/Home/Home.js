import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  return (
    <>
      <header className="header">
        <div className="avatar">
          {/* <img src={user.picture} alt="Avatar" /> */}
        </div>
        <div className="welcome-msg">
          <p className="welcome-name">
            {/* Welcome <span>{user.name}</span> */}
          </p>
          <p className="catch-phrase">What ingredients shall we use today?</p>
        </div>
      </header>
      <main className="main-home">
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Login
        </button>
        <h3>Welcome Name</h3>
        <p>What ingredients shall we use today?</p>
      </main>
      <nav className="nav-menu">
        Home - Ingredients- Shopping list - Settings
      </nav>
    </>
  );
}

export default Home;
