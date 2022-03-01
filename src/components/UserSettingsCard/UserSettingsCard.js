import React from 'react'

const UserSettingsCard = ({ children }) => {
  return (
    <div className='card-wrapper-settings'>
      <div className='card-setting'>{children}</div>
    </div>
  )
}

export default UserSettingsCard
