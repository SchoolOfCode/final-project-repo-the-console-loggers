import React from "react";

export default function InputBox({ text, placeholder, handleName }) {
  return (
    <label className="label">
      {text}
      <input type="text" placeholder={placeholder} onChange={handleName} />
    </label>
  );
}
