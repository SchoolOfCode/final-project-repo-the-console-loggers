import Button from '../Ui/Button/Button'
import React from 'react'

const UserSettingsCard = ({
  name,
  text,
  prompt,
  backgroundColor,
  textColor,
  icon,
  width,
  children,
}) => {
  return (
    <div className='card-wrapper-settings'>
      <div className='card-setting'>
        <h1 className='settings-card-title'>{name}</h1>
        <p className='settings-text'>{prompt}</p>
        <div className='username-input-container'>{children}</div>
        <div className='buttons-container-settings'>
          <Button
            text={text}
            backgroundColor={backgroundColor}
            textColor={textColor}
            width={width}
            icon={icon}
          />
        </div>
      </div>
    </div>
  )
}

export default UserSettingsCard
