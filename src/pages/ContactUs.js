import {React, useLayoutEffect} from 'react';
import '../App.css';
import SignUp from '../components/SignUp';
import BottomFooter from '../components/BottomFooter';



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

