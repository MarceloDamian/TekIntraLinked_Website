
import React from 'react';
// import './Button.css';


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
            className={`btn--outline btn--medium`}
            type={type}
          >
            {children}
            {/* <Link to='/ContactUsOk' className='btn-mobile'/> */}
          </button>
    );
  };
