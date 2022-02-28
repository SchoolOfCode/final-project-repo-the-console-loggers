import { useState } from 'react'

const Checkbox = ({
  id,
  selected,
  setSelected,
  buttonChecked,
  setButtonChecked,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const filterTickButtons =
    buttonChecked && buttonChecked.filter((item) => item.id !== id)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    setSelected(!selected)
    setButtonChecked(
      isChecked ? filterTickButtons : [...buttonChecked, { id: id }]
    )
  }

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
  )
}

export default Checkbox
