import { Link } from 'react-router-dom';
import Button from '../Ui/Button/Button';
import { useLocation } from 'react-router-dom';

const EmptyScreen = ({ title, icon, subText, highlight, linkTo }) => {
  const location = useLocation();
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
            text= {location.pathname === '/RecipeList' ? '+ Select items' : '+ Add new item'}
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
