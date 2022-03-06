import './RotatingLogo.scss';

function Logo() {
  return (
    <div className='logo'>
      <div>
        <img
          src={
            process.env.PUBLIC_URL +
            '/assets/rotating-logo/fridgeful-background.png'
          }
          className='logo-background'
          alt='logo'
        />
      </div>
      <img
        src={
          process.env.PUBLIC_URL + '/assets/rotating-logo/fridgeful-fridge.png'
        }
        className='logo-fridge'
        alt='logo'
      />
    </div>
  );
}

export default Logo;
