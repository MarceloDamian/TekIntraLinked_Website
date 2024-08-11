import {React, useLayoutEffect} from 'react';
import '../App.css';
import BottomFooter from '../components/BottomFooter';
import DemoIcon from '../components/DemoIcon';
import Demos from '../components/Demos';
// import DemoIcon from './DemoIcon';



export default function Portfolio() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      Hello World
      <Demos/>
    </>
  );
}

