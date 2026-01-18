
import React from 'react';
import './Button.css';
import { Link, Route, Routes } from 'react-router-dom';
import ContactUsOk from '../pages/StaticContactUs';

// children are neccessary because it creates muliple copies with different properties
// these are parameters passed dependent on the button. 
  export const Submit = 
  ({
      children,
      type,
      // onClick
  }) => 
  {
    return (      

          <button
<<<<<<< HEAD
            className={`btn--outline btn--medium btn--small`}
=======
            className={`btn--outline btn--medium`}
>>>>>>> Current-Copy
            type={type}
          >
            {children}
            {/* <Link to='/ContactUsOk' className='btn-mobile'/> */}
          </button>
    );
  };
