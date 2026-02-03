import React, {useEffect} from 'react';
// import '../App.css';
import SignUp from '../pages/SignUp';
// import './SignUp.css';


const ContactUs = () =>
{
  useEffect(() => { 
    window.scrollTo(0, 0)
  }, []);
  // Change all useLayoutEffect to useEffect
  // Empty dependency array
  return (
    <>
      <SignUp/>
    </>
  );
};

export default ContactUs;
