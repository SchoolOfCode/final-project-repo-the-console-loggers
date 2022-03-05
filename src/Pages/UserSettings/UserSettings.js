//Utils
import { useAuth0 } from '@auth0/auth0-react';
//Components
import Card from '../../components/Card/Card';
import Button from '../../components/Ui/Button/Button';
import UserSettingsCard from '../../components/UserSettingsCard/UserSettingsCard';
//Pages
import Login from '../Login/Login';

function UserSettings() {
  const { isAuthenticated, logout } = useAuth0();
  return isAuthenticated ? (
    <main className='main-settings'>
      <h1 className='settings-title'>Settings</h1>

      <Card name='darkmode-lightmode' />

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

export default UserSettings;
