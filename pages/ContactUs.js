// Import React and useEffect hook
import React, {useEffect} from 'react';
// Import SignUp page component
import SignUp from '../pages/SignUp';
// Import BottomFooter component
import BottomFooter from "../src/components/BottomFooter";

// ContactUs page component
const ContactUs = () =>
{
  // Scroll to top on component mount
  useEffect(() => { 
    window.scrollTo(0, 0)
  }, []);

  // TODO: Change all useLayoutEffect to useEffect
  // TODO: Use empty dependency array for effects

  return (
    <>
      {/* Render SignUp component */}
      <SignUp/>
      {/* Render BottomFooter component */}
      <BottomFooter />
    </>
  );
};

// Export ContactUs component as default
export default ContactUs;
