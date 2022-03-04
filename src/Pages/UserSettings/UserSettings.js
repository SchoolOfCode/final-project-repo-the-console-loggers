//Auth user
import { useAuth0 } from '@auth0/auth0-react'

import Card from '../../components/Card/Card'
import Button from '../../components/Ui/Button/Button'
import InputBox from '../../components/Ui/InputBox/InputBox'
import UserSettingsCard from '../../components/UserSettingsCard/UserSettingsCard'
//Pages
import Login from '../Login/Login';

function UserSettings() {
  const { isAuthenticated, logout } = useAuth0();
  return isAuthenticated ? (
    <main className='main-settings'>
      <h1 className='settings-title'>Settings</h1>

      <Card name='darkmode-lightmode' />

      <UserSettingsCard
        // prompt='update your username'
        backgroundColor='green-button'
        textColor='white'
        width='fullLength'
      >
        <h1 className='settings-card-title'>Username</h1>
        <p className='settings-text'>Save Username</p>
        <div className='username-input-container'>
          <InputBox />
        </div>
        <div className='buttons-container-settings'>
          <Button
            text='Save user name'
            backgroundColor='green-button'
            textColor='white'
            width='fullLength'
          />
        </div>
      </UserSettingsCard>

      <UserSettingsCard width='fullLength' logout={logout}>
        <h1 className='settings-card-title'>Log out</h1>
        <div className='buttons-container-settings'>
          <Button
            text='Log out'
            backgroundColor='yellow-button'
            textColor='white'
            width='fullLength'
            handleClick={
              logout && (() => logout({ returnTo: window.location.origin }))
            }
          />
        </div>
      </UserSettingsCard>
      <UserSettingsCard>
        <h1 className='settings-card-title'>Delete account</h1>
        <div className='buttons-container-settings'>
          <Button
            text='Delete account'
            backgroundColor='red-button'
            textColor='white'
            width='fullLength'
            icon='bin'
          />
        </div>
      </UserSettingsCard>
    </main>
  ) : (
    <div className='app'>
      <Login />
    </div>
  );
}

export default UserSettings
