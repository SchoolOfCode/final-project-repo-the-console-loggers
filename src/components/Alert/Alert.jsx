import { useEffect, useState } from 'react';

const Alert = ({ isAlertOpen, setIsAlertOpen }) => {
  const [animation, setAnimation] = useState('default-hidden');

  useEffect(() => {
    const closeAlert = () => {
      const timer = setTimeout(function ingredientTimeOut() {
        setIsAlertOpen(false);
        return () => clearTimeout(timer);
      }, 2700);
    };
    setAnimation('alert-animation-in');
    isAlertOpen && hideAlertAnimation();
    isAlertOpen && closeAlert();
  }, [isAlertOpen, setIsAlertOpen]);

  const hideAlertAnimation = () => {
    const timer = setTimeout(function ingredientTimeOut() {
      setAnimation('alert-animation-out');
      return () => clearTimeout(timer);
    }, 2500);
  };

  return (
    <div className='alert-container'>
      <div className={`alert ${animation}`}>
        Item added to the shopping list
      </div>
    </div>
  );
};

export default Alert;
