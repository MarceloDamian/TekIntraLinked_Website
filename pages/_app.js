
// Import React useState hook for state management
import {useState} from 'react';
// Import Navbar component
import Navbar from '../src/components/Navbar';
// Import global CSS styles
import './App.css';
import './BottomFooter.css';
import './Button.css';
import './Demo.css';
import './Main_Section.css';
import './Navbar.css';
import './SignUp.css';
import './Techstack.css';
import './TopFooter.css';

// Import Portfolio demo CSS styles
import './Portfolio/FirstDemo.css';
import './Portfolio/SecondDemo.css';
import './Portfolio/ThirdDemo.css';

// Import Swiper slider CSS styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// Main App component that wraps all pages
function MyApp({ Component, pageProps }) 
{
    
  // State to track menu active status for mobile or responsive menu
  const [menuActive, setMenuActive] = useState(false);
  
  return (
    <>
      {/* Wrapper div toggles class based on menuActive state to control menu visibility */}
      <div className={menuActive ? 'menu-active' : ''}>
        {/* Navbar component with props to control menu state */}
        <Navbar click={menuActive} setClick={setMenuActive} />
        {/* Render the current page component with its props */}
        <Component {...pageProps} />
        {/* BottomFooter component is currently commented out */}
        {/* <BottomFooter /> */}
      </div>
    </>
  );

}

// Export the main App component as default
export default MyApp;

// TODO Comments for future improvements and notes
// Complete Website
// Delete useless code. 
// Refactor code and make more efficiently (Optimize)

// When shrunk down the text "Adventure" messes with the flexbox layout.

// Add core things from my resume on home page.

// Pages: home page, Portfolio, contact page
// Maybe move the three bars (menu icon) to the right side.
