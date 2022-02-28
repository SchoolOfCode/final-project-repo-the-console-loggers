import Button from '../Ui/Button/Button';
import React from "react";


const UserSettingsCard = ({name, text, prompt, backgroundColor, textColor,icon, width}) => {
  
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="main-card">
          <div className="texts">
            <h1 className="settings-card-title">{name}</h1>
            <p className="settings-text">{prompt}</p>
          <div className="buttons-container-home">
            <Button 
            text={text}
      backgroundColor={backgroundColor}
      textColor={textColor}
      width={width}
      icon={icon}/>
      </div>
          </div>
        </div>
      
    
      </div>
    </div>
    
  );
};

export default UserSettingsCard