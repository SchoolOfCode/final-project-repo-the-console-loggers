import { useEffect, useState } from 'react';

const Checkbox = ({
  id,
  name,
  selected,
  setSelected,
  checkboxStatus,
  setCheckboxStatus,
  ingredientsToAdd,
  setIngredientsToAdd,
}) => {
  // affecting All page
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    setSelected(!selected);
    setCheckboxStatus(isChecked ? updateObject(false) : updateObject(true));
  };

  // -------------------------------------------
  // if isChecked (state) is true,
  // we want to change our isChecked status of each item(object) in ingredientsToAdd array.
  // -------------------------------------------
  // const updateRecipeObject = (trueOrFalse) => {
  //   return ingredientsToAdd.map((item) =>
  //     // item.id === id ? { id: id, name: name, isChecked: trueOrFalse } : item
  //   );
  // }
  // -------------------------------------------

  // affecting the ingredients I already have
  // for Home page
  const updateObject = (trueOrFalse) => {
    return checkboxStatus.map((item) =>
      item.id === id ? { id: id, name: name, isChecked: trueOrFalse } : item
    );
  };

  // affecting the ingredients I already have
  // for checking if isChecked of checkboxStatus is ticked
  const checkedInCheckboxStatus = checkboxStatus.filter(
    (item) => item.name === id && item.isChecked
  );

  // affecting the ingredients I already have
  // to grey out the ingredient I have
  useEffect(() => {
    return !checkedInCheckboxStatus.length
      ? setIsChecked(false)
      : setIsChecked(true);
  }, [checkedInCheckboxStatus.length]);

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
