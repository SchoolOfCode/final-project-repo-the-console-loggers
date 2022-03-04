import { Link } from 'react-router-dom';
import Button from '../Ui/Button/Button';

const EmptyScreen = () => {
  return (
    <div className='emptyScreenContainer'>
      <h1>Nothing in the fridge!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/empty-fridge.svg`}
        alt=''
      />
      <p className='empty-paragraph'>
        What about adding some{' '}
        <span className='text-ingredients'>ingredients</span>?
      </p>
      <div className='button-container-empty-screen'>
        <Link className='add-ingredient' to='AddIngredient'>
          <Button
            text='+ Add ingredients'
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
