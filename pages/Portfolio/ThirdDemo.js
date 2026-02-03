import {useLayoutEffect} from 'react';
// import "./ThirdDemo.css";




export default function ThirdDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className = "ThirdDemo_">
      <h1>Third Demo</h1>
      {/* A big textbox that deploys the project or 
      website and then a botton on the top left to view 
      the code in black and green */}
    </div>
  );
}

