
import React from 'react';
import './Button.css';
import { Link, Route, Routes } from 'react-router-dom';
import ContactUsOk from './StaticContactUs';

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
            className={`btn btn--outline btn--small`}
            type={type}
          >
            {children}
            {/* <Link to='/ContactUsOk' className='btn-mobile'/> */}
          </button>
    );
  };
