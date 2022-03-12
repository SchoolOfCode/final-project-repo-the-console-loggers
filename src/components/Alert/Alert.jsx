import { useEffect, useState } from 'react';

const Alert = ({ isAlertOpen, setIsAlertOpen, children }) => {
  const [animation, setAnimation] = useState('default-hidden');

  useEffect(() => {
    const closeAlert = () => {
      const timer = setTimeout(function ingredientTimeOut() {
        setIsAlertOpen(false);
        return timer;
      }, 2700);
    };
    setAnimation('alert-animation-in');
    isAlertOpen && hideAlertAnimation();
    isAlertOpen && closeAlert();
  }, [isAlertOpen, setIsAlertOpen]);

  const hideAlertAnimation = () => {
    const timer = setTimeout(function ingredientTimeOut() {
      setAnimation('alert-animation-out');
      return timer;
    }, 2500);
  };

  return (
    <div className='alert-container'>
      <div className={`alert ${animation}`}>{children}</div>
    </div>
  );
};

export default Alert;
