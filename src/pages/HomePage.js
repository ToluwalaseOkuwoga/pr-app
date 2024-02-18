import React from 'react';
import './HomePage.css';
import communityImage from '../images/community.jpg';
import eventsImage from '../images/events.jpg';

function HomePage() {
  return (
    <div className="homePage">
      <section className="heroSection" style={{ backgroundImage: `url(${communityImage})` }}>
        <h1>Welcome to Our PR Community</h1>
        <p>Delving into the depths of communication, one nuance at a time.</p>
      </section>

      <section className="visionSection">
        <h2>Our Vision</h2>
        <p>Exploring the nuances of communication. Challenging the status quo. Building a community passionate about transforming PR into the next era.</p>
      </section>

      <div className="cardsContainer">
        <div className="card" style={{ backgroundImage: `url(${eventsImage})` }}>
          <div className="cardContent">
            <h3>Events</h3>
            <p>Discover and participate in transformative events.</p>
          </div>
        </div>
        {/* Repeat for other sections like Merch, Contributions, etc., with their respective images */}
      </div>
      
      {/* Additional sections and creative elements */}
    </div>
  );
}

export default HomePage;
