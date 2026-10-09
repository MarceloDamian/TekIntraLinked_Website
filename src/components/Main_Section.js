// Import React
import React from 'react';

// Main_Section displays a background video with a branding image overlay
const Main_Section = ()=>{
  return (
    <div className='Video-Container'>
      {/* The page needs a top-level heading; the hero is otherwise unheaded and
          the first heading on the page used to be "TECHSTACK". Visually hidden
          so the design is unchanged. */}
      <h1 className="visually-hidden">TekIntraLinked</h1>

      {/* Background video: decorative, so hide it from the accessibility tree. */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline={true.toString()}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/Hyperlapse.mp4" type="video/mp4"/>
      </video>

      {/* Branding image overlay. The h1 above already names the page, so this
          repeats it; mark it decorative to avoid a duplicate announcement. */}
      <div className='Tek-Display-Wrapper'>
        <img src={`images/TekIntraLinked-Logo-Light.png`} alt="" className="Tekintralinked-Logo-Enlarged" />
      </div>
      {/* TODO: Update video to a more engaging visual if needed */}
    </div>
  );
}

export default Main_Section;
