import React from 'react';

export default function InputBox({
  text,
  placeholder,
  handleName,
  type,
  className,
  value,
  required,
  id,
}) {
  return (
    <label className='label'>
      <span className='label-span'>{text}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleName}
        className={className}
        value={value}
        required={required}
      />
    </label>
  );
}
