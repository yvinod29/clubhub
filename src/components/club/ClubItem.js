import './ClubItem.css';

const ClubItem= ({ imageUrl, iconUrl, clubName }) => {
 
 

  return (
    <div className="event-card">
    
      <div className="bottom-section">
        <div className="circle-icon">
          <img src={iconUrl} alt="Club Icon" className="icon-image" />
        </div>
        <div className="club-details">
          <div className="club-name">
            {clubName}
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default ClubItem;
