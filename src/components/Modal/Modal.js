import React from 'react';
import Button from '../Ui/Button/Button';

const Modal = () => {
  return (
    <div className='modal-container'>
      <div className='modal'>
        <h1>Are you sure you want to delete the list?</h1>
        <div className='button-container'>
          <Button
            text='Confirm'
            backgroundColor='red-button'
            textColor='white'
          />
          <Button
            text='Cancel'
            backgroundColor='transparent'
            textColor='green'
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
