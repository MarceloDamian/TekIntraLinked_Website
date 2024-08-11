import React, { useState, useEffect } from 'react';

import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() 
{
  
  const [click, setClick] = useState(false); 
  // click is a booleanvar and setclick is a constructor?
  // click is a var in that set constructor which is setclick.
  // Setclick is a set existing state from react.
  // You then have to initialize click which is false as it is a booleanvar

  const handleClick = () => setClick(!click); // opposite of click . 
  const closeMobileMenu = () => setClick(false);


  const [button, setButton] = useState(true); // Button may be used in the future. 

  const showButton = () => 
  {
    if (window.innerWidth <= 535)  // the button is the top sign up button
    {
      setButton(false);
      
    } 
    else 
    {
      setButton(true);

    }
  };

  // useEffect( () => { (window.innerWidth <= 535)? {} :  window.addEventListener('resize', ); } ); // delete?


  // useEffect(() => {showButton();}, []); // OG line returning an empty array. NULL


  useEffect(() => {showButton();}); // not OG line returning nothing 
  window.addEventListener('resize', showButton); // changed resize to resizing



  return (
      <nav className='navbar'>
          <div className='navbar-container'>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? '' : 'fas fa-bars'} />
              {/* If click is true then x. If click is false then menu bars   */}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu '}>
              {/* If false the navigation menu disappears. If true the menu appears. */}
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : ''} />
              </div>

              {/* For closeMobileMenu: if click is true then the dropdown should disappear. If click is false then dropdown should reappear. */}
              
              {/* Onclick set to true for all of them is the same thing, but it is a lot less cleaner. Because there is a slight delay and glitch. */}
              
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Portfolio' className='nav-links' onClick={closeMobileMenu}  >
                  PORTFOLIO
                </Link>
              </li>
              
              {/* <li >
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li> */}

            </ul>

            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}

          </div>          
      </nav>
  );
}

export default Navbar;
