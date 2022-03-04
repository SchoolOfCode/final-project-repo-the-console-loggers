import { useState, useEffect } from 'react';

const Modal = ({ isModalOpen, children }) => {
  const [animation, setAnimation] = useState('hiddensi');

  useEffect(() => {
    setAnimation('modal-animation-in');
  }, []);

  return (
    <div
      className={`modal-container ${isModalOpen ? 'showModal' : 'hideModal'}`}
    >
      <div className={`modal ${animation}`}>{children}</div>
    </div>
  );
};

export default Modal;
