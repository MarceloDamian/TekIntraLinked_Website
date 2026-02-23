// Import React
import React from 'react';

// Submit component renders a button with outline style and medium size
// children prop allows button label or nested elements
// type prop specifies button type (e.g., submit, button)
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
        {/* Render children inside the button */}
        {children}
        {/* Link component commented out for future use */}
        {/* <Link to='/ContactUsOk' className='btn-mobile'/> */}
      </button>
  );
};
