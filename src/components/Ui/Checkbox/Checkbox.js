import { useState, useEffect } from 'react';

const Checkbox = ({
  id,
  name,
  checkboxStatus,
  setCheckboxStatus,
}) => {
  // being used everywhere for ticked or not ticked
  const [isChecked, setIsChecked] = useState(false);

  const updateObject = (trueOrFalse) => {
    return checkboxStatus.map((item) =>
      item.id === id ? { id: id, name: name, isChecked: trueOrFalse } : item
    );
  };
  // Check if checkboxStatus.isChecked is ticked > working when we are in Full Recipe page
  const MatchingWithMine = checkboxStatus.filter(
    (item) => item.name === id && item.isChecked
  );
  useEffect(() => {
    // for full Recipe page
    return !MatchingWithMine.length ? setIsChecked(false) : setIsChecked(true);
  }, [MatchingWithMine.length]);
  const handleOnChange = () => {
    setIsChecked(!isChecked);

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
        <span className='check-box'>
          <svg width='12px' height='10px'>
            <use href='#check'></use>
          </svg>
        </span>
      </label>
    </>
  );
};

export default Checkbox;
