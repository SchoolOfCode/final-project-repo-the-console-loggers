import React, { useState } from 'react'
//Utils
import { useAuth0 } from '@auth0/auth0-react';
//Components

import Button from '../../components/Ui/Button/Button';
import UserSettingsCard from '../../components/UserSettingsCard/UserSettingsCard';
import Modal from '../../components/Modal/Modal';
//Pages
import Login from '../Login/Login';

function UserSettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth0();
  
  function deleteAccount(){
    console.log("i am deleted")
  }
  return isAuthenticated ? (
    <main className='main-settings'>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen}>
          <h1>Are you sure you want to delete your account?</h1>
          <div className='button-container'>
            <Button
              text='Yes, I&#39;m sure'
              backgroundColor='red-button'
              textColor='white'
              handleClick={deleteAccount}
            />
            <Button
              text='Cancel'
              backgroundColor='transparent'
              textColor='green'
              handleClick={() => setIsModalOpen(false)}
            />
          </div>
        </Modal>
      )}
      <h1 className='settings-title'>Settings</h1>

      {/* <Card name='darkmode-lightmode' /> */}

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
            handleClick={() => setIsModalOpen(true)}
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
