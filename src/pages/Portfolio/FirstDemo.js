import {React, useLayoutEffect} from 'react';
import BottomFooter from '../../components/BottomFooter';
import '../../App.css';



export default function FirstDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      First Demo
      {/* A big textbox that deploys the project or 
      website and then a botton on the top left to view 
      the code in black and green */}
    </>
  );
}

