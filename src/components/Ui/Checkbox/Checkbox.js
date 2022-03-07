import { useState } from 'react';

const Checkbox = ({
  id,
  name,
  size,
  selected,
  setSelected,
  checkboxStatus,
  setCheckboxStatus,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const updateObject = (status) => {
    return checkboxStatus.map((item) =>
      item.id === id ? { id: id, name: name, isChecked: status } : item
    );
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    setSelected(!selected);
    setCheckboxStatus(isChecked ? updateObject(false) : updateObject(true));
  };

  return (
    <>
      {/* Checkbox tick svg */}
      <svg className='inline-svg'>
        <symbol id='check' viewBox='0 0 12 10'>
          <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
        </symbol>
      </svg>
      <input
        className='input-checkbox'
        id={id}
        type='checkbox'
        name='tik'
        checked={isChecked}
        onChange={handleOnChange}
      />

      <label className='label-input-checkbox' htmlFor={id}>
        <span className={`check-box checkbox-${size}-size`}>
          <svg width='12px' height='10px'>
            <use href='#check'></use>
          </svg>
        </span>
      </label>
    </>
  );
};

export default Checkbox;
