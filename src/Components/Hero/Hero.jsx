import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import heroImage from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="new-arrival" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
