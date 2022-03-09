import React from 'react';

const Select = ({ children, id, handleUnits, value }) => {
  return (
    <label className='label-select' htmlFor={id}>
      <select value={value} onChange={handleUnits} name={id} id={id}>
        {children}
      </select>
    </label>
  );
};

export default Select;
