import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted > 
        <source src="../../videos/Hyperlapse.mp4" type="video/mp4"/>
      </video>
      {/* <a target="_blank" href="http://www.videezy.com">Free Stock Footage by Videezy!</a> */}
      {/* Copyright ^^^^ also buy license */}

      {/*! Change video to something more eye grabbing !! */} 
      <h1>
          TekIntraLinked
      </h1>
      {/* A transition of someone typing "Hi my name is Erick" */}
      <p>......................................</p>
    </div>
  );
}

export default HeroSection;
