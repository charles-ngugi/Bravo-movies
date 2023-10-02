import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
// import '../../src/App.css';
import '../App.css';
import { Link } from 'react-router-dom';

const hello = () =>{
    console.log("I JUST GOT CLICKED")
}


function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='./public/videos/video-1.mp4' autoPlay loop muted  /> */}
        {/* <h1 style={{ fontFamily: 'Caveat, cursive' }}>🌟🎬ADVENTURE AWAITS🎬🌟</h1> */}
        <h1>🌟🎬ADVENTURE AWAITS🎬🌟</h1>
        <p>Scroll for latest movies and series!</p>
        <p>Let the fun begin!</p>
        <div className='hero-btns'>

            <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline' >
                GET STARTED
            </Button>

             <Link to='https://www.traileraddict.com/'>
             <button className='btnss' buttonSize='btn--large' buttonStyle='btn--primary' Link>
                WATCH TRAILERS
                <i className='far fa-play-circle'/>
            </button>
             </Link>
        
        </div>
        </div>
  );
}

export default HeroSection;