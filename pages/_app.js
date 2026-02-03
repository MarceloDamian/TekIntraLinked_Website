
import React from 'react';
import Navbar from '../src/components/Navbar';
import BottomFooter from "../src/components/BottomFooter";
import './App.css';
import './BottomFooter.css';
import './Button.css';
import './Demo.css';
import './Main_Section.css';
import './Navbar.css';
import './SignUp.css';
// import './SubscriptionSection.css';
import './Techstack.css';
import './TopFooter.css';



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <BottomFooter />
    </>
  );
}

export default MyApp;

// Complete Website
// Delete useless code. 
// Refactor code and make more efficently. ( Optimize )
 
// MAIN PAGE (Where all edits will occur): 
  // have a Techstack: like the website joshbe.me that has the logos and techstack
  // have a download resume button. 
  // Modify text 
  // Change TRVL
  // Change Sign up 
  // Change the bottom along with the copywrite and also the icons only linkedin and github.
  // add or delete another route. 
  // Change App css to fit what I want to do better.
  // Have the menu bar disappear as the navigation bar is enough.
  // bring the words back to the naviagation bar. 

  // When changed to mobile the navbar doesnt disappear.
  // When changed the mobile below the sign up there is a glitch. 
  // When changed to mobile the buttons or text dont change depending on the size. Basically it doesnt 
  // have like a flex bot on it. 
  // When shrunk down the text "Adventure" messes with the flexbot.
  
  // Add core things from my resume on home page.

  // PAGES: home page, Portfolio,contact page
  // Maybe move the three bars to the right side.