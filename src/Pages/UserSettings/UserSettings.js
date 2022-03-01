import Card from '../../components/Card/Card'
import InputBox from '../../components/Ui/InputBox/InputBox'
import UserSettingsCard from '../../components/UserSettingsCard/UserSettingsCard'

function UserSettings() {
  return (
    <main className='main-settings'>
      <h1 className='settings-title'>Settings</h1>

      <Card name='darkmode-lightmode' />

      <UserSettingsCard
        name='Username'
        text='Save Username'
        prompt='update your username'
        backgroundColor='green-button'
        textColor='white'
        width='fullLength'
      >
        <InputBox />
      </UserSettingsCard>

      <UserSettingsCard
        name='Log out'
        text='Log out'
        backgroundColor='yellow-button'
        textColor='white'
        width='fullLength'
      />
      <UserSettingsCard
        name='Delete account'
        text='Delete account'
        backgroundColor='red-button'
        textColor='white'
        width='fullLength'
        icon='bin'
      />
    </main>
  )
}

export default UserSettings
