import { Link } from 'react-router-dom';
import Button from '../Ui/Button/Button';

const EmptyScreen = ({ title, icon, subText, highlight, linkTo }) => {
  return (
    <div className='emptyScreenContainer'>
      <h1>{title}</h1>
      <img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`} alt='' />
      <p className='empty-paragraph'>
        {subText} <span className='text-ingredients'>{highlight}</span>
      </p>
      <div className='button-container-empty-screen'>
        <Link className='add-ingredient' to={linkTo}>
          <Button
            text='+ Add items'
            backgroundColor='green-button'
            textColor='white'
            width='fullLength'
          />
        </Link>
      </div>
    </div>
  );
};

export default EmptyScreen;
