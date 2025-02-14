import {React, useLayoutEffect} from 'react';
import '../App.css';
import SignUp from '../pages/SignUp';
import './SignUp.css';





export default function ContactUs() 
{
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      <SignUp/>
    </>
  );
}

