import React from 'react'

export default function InputBox({
  text,
  placeholder,
  handleName,
  type,
  className,
  value,
}) {
  return (
    <label className='label'>
      {text}
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleName}
        className={className}
        value={value}
      />
    </label>
  )
}
