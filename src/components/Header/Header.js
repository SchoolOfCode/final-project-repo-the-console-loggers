const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="avatar">
        {/* <img src={user.picture} alt="Avatar" /> */}
      </div>
      <div className="welcome-msg">
        <p className="welcome-name">{/* Welcome <span>{user.name}</span> */}</p>
        <p className="catch-phrase">What ingredients shall we use today?</p>
      </div>
    </header>
  );
};

export default Header;
