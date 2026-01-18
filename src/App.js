import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import BottomFooter from './components/BottomFooter';

import Home from './pages/Home';
import './App.css';
// import {useState} from 'react';
// import ContactUsOk from './pages/ContactUsOk';


// !!

// import SignUp from './components/SignUp';
import ContactUs from './pages/ContactUs';
import Portfolio_ from './pages/Portfolio_';


// import FirstDemo from './pages/Portfolio/FirstDemo';
// import SecondDemo from './pages/Portfolio/SecondDemo';
// import ThirdDemo from './pages/Portfolio/ThirdDemo';
// import FourthDemo from './pages/Portfolio/FourthDemo';
// import FifthDemo from './pages/Portfolio/FifthDemo';
// import SixthDemo from './pages/Portfolio/SixthDemo';
// import SeventhDemo from './pages/Portfolio/SeventhDemo';
// import EighthDemo from './pages/Portfolio/EighthDemo';
// import NinthDemo from './pages/Portfolio/NinthDemo';
// import TenthDemo from './pages/Portfolio/TenthDemo';
//!!



function App() {
  return (
    // <SignUp/>
      <Router>
        <Navbar/>  {/* Needed to show navigation bar */}
          <Routes>
            <Route path='' exact element={<Home/>} />
            <Route path='/ContactUs' element={<ContactUs/>} />
            <Route path='/Portfolio' element={<Portfolio_/>} />

          </Routes>
        <BottomFooter/>
      </Router>
      
  );
}

export default App;
<<<<<<< HEAD
=======

// Complete Website
// Delete useless code. 
// Refactor code and make more efficently. ( Optimize )
>>>>>>> Current-Copy
 
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
