import React from 'react';
// import '../App.css';
// import './Main_Section.css';

const Main_Section = ()=>{
  return (
    <div className='Video-Container'>
      <video autoPlay loop muted > 
        <source src="../../videos/HyperLapse.mp4" type="video/mp4"/>
      </video>

      <div className='Tek-Display-Wraper'>
        <img src={`images/TekIntraLinked-Logo-Light.png`} className="Tekintralinked-Logo-Enlarged" />,
      </div>
      {/* <a target="_blank" href="http://www.videezy.com">Free Stock Footage by Videezy!</a> */}
      {/* Copyright ^^^^ also buy license */}
      {/*! Change video to something more eye grabbing !! */} 
      {/* <h1> TekIntraLinked </h1> */}
      {/* A transition of someone typing "Hi my name is Erick" */}
      {/* <p>......................................</p> */}
    </div>
  );
}

export default Main_Section;
