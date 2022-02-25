import React from 'react'

export default function Button({text, backgroundColor, textColor}) {
  return (
    <button className={`button ${backgroundColor} ${textColor}-text`}>{text}</button>
  )
}
