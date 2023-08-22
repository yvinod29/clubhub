import React from 'react';
import './EventCard.css'; // Create or update this CSS file

const EventCard = ({ imageUrl, iconUrl, clubName }) => {
  return (
    <div className="event-card">
      <img className="event-image" src={imageUrl} alt="Event" />
      <div className="bottom-section">
        <div className="circle-icon">
          <img src={iconUrl} alt="Club Icon" className="icon-image" />
        </div>
        <div className="club-name">{clubName}</div>
      </div>
    </div>
  );
};

export default EventCard;
