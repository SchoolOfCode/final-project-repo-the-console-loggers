import Card from '../../components/Card/Card'
import UserSettingsCard from '../../components/UserSettingsCard/UserSettingsCard';
import Button from '../../components/Ui/Button/Button';

function UserSettings() {
  return (
    <main className='main-settings'>
      <h1 className='settings-title'>Settings</h1>
     <Card name='darkmode-lightmode'/>
     <UserSettingsCard 
     name='Username'
     text='Save Username'
     prompt='update your username'
     backgroundColor='green-button'
     textColor='white' 
     width='fullLength'/>
     <UserSettingsCard 
     name='Log out' 
     text='Log out'
     backgroundColor='yellow-button' 
     textColor='white'
     width='fullLength'/>
     <UserSettingsCard 
          name='Delete account'
          text='Delete account'
          backgroundColor='red-button'
          textColor='white'
          width='fullLength'
          icon='bin'/>
    </main>
  );
}

export default UserSettings;