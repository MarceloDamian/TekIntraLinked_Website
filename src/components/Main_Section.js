// Import React
import React from 'react';

// Main_Section displays a background video with a branding image overlay
const Main_Section = ()=>{
  return (
    <div className='Video-Container'>
      {/* Background video looped and muted */}
      <video autoPlay loop muted > 
        <source src="../../videos/HyperLapse.mp4" type="video/mp4"/>
      </video>

      {/* Branding image overlay */}
      <div className='Tek-Display-Wrapper'>
        <img src={`images/TekIntraLinked-Logo-Light.png`} className="Tekintralinked-Logo-Enlarged" />,
      </div>
      {/* TODO: Update video to a more engaging visual if needed */}
    </div>
  );
}

export default Main_Section;
