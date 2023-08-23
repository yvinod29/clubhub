import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ imageUrl, iconUrl, clubName }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistrationToggle = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div> 
    <div className="event-card1">
      <div className="event-image-container">
 
        <img className="event-image" src={imageUrl} alt="Event" />
      </div>
      <div className="bottom-section ">
        <div className="circle-icon">
          <img src={iconUrl} alt="Club Icon" className="icon-image" />
        </div>
        <div className="club-details">
          
          <div className="club-name  ">
             
          
            <div>
            {clubName}
            </div>    
            <div className="xyz">
            <button className={`attend-button ${isRegistered ? 'registered' : ''}`} onClick={handleRegistrationToggle}>
            {isRegistered ? 'Registered' : 'Attend'}
          </button>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
    
    </div>
  );
};

export default EventCard;
