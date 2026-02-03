


import {useLayoutEffect} from 'react';


export default function FirstDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className='FirstDemo_'>

        <h1>Hello!!</h1>
        {/* A big textbox that deploys the project or 
        website and then a botton on the top left to view 
        the code in black and green */}

    </div>
  );
}

// Complete Website