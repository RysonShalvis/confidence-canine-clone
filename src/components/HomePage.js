import React from 'react';
import backgroundVideo from '../media/dog-wind-homepage.mp4';
import logo from '../media/canine-logo.jpeg'
import '../scss/_homepage.scss';

function HomePage() {
  return (
    <div className='homepage'>

      <div className='background-video'>
        <video muted autoPlay loop src={backgroundVideo}/>
      </div>

      <div className='background-gradient'></div>

      <div className='side-nav'>
        <h2>TRAINING</h2>
        <h2>PROGRAM</h2>
        <h2>REVIEWS</h2>
        <h2>CONTACT</h2>
      </div>

      <div className='main-content'>
        <div>
            <h2>OWNER CONFIDENCE</h2>
            <h2>LEADERSHIP</h2>
        </div>
        <div className='logo-container'>
            <img src={logo}/>
        </div>
        <div>
            <h2>CANINE CONFIDENCE</h2>
            <h2>TEAMWORK</h2>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
