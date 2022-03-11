import React from 'react';

export default function Button({
  text,
  backgroundColor,
  textColor,
  width,
  icon,
  handleClick,
}) {
  return (
    <button
      data-testid='buttonx'
      onClick={handleClick}
      className={`button ${backgroundColor} ${textColor}-text ${width}-button`}
    >
      {icon === undefined ? null : (
        <img
          className='button-icon'
          src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`}
          alt='bin'
        />
      )}

      {text}
    </button>
  );
}
