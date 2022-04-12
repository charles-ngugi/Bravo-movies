import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
// import '../../src/App.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='./public/videos/video-2.mp4' autoPlay loop muted  />
        <h1>ADVENTURE AWAITS</h1>
        <p>Lets Go!!!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                GET STARTED
            </Button>
            <Button className='btns' buttonSize='btn--large' buttonStyle='btn--primary'>
                WATCH TRAILERS
                <i className='far fa-play-circle'/>
            </Button>
        </div>
        </div>
  );
}

export default HeroSection;