import {useLayoutEffect} from 'react';
// import './SecondDemo.css';



export default function SecondDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className='SecondDemo_'>

        <h1>Hello SecondDemo!!</h1>
        {/* A big textbox that deploys the project or 
        website and then a botton on the top left to view 
        the code in black and green */}

    </div>
  );
}

// Complete Website
