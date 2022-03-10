import React from 'react';

export default function InputBox({
  text,
  placeholder,
  handleName,
  type,
  value,
  required,
  id,
}) {
  return (
    <label className='label'>
      <span className='label-span'>{text}</span>
      <input
        className='input-box'
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleName}
        value={value}
        required={required}
      />
    </label>
  );
}
