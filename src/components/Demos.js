


import React from 'react';
import DemoIcon from './DemoIcon';

import { IoLogoReact } from "react-icons/io5";


// Demo.css is in DemoIcon

// Move Demo to Portfolio file. Home and Portfolio have to be different. 
// Each card should inevitably link to another page with a code or demo. 
// Each demo should work by itself. 

function Demos() 
{

  return (
    <div className='Demo'>
      {/* Seperate these Portfolio based on skill // Web dev // AI machine learning // Mobile app (Full Stack) */}
      <div className='Demo__container'>
          <ul className='Demo__items'>
            <div class="flex vstack">
                
            
              {/* <DemoIcon
                // src='images/img-4.jpg'
                data={<IoLogoReact size={175} color='turquoise'/>}
                text='Mobile App'
                label='---------'
                path='/FirstDemo'
              />  */}
              
                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='This React Website'
                  label='---------'
                  path='../Portfolio/FirstDemo'
                /> 

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Machine Learning Demo'
                  label='---------'
                  path='../Portfolio/SecondDemo'
                /> 

                <DemoIcon  
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Retro Website'
                  label='---------'
                  path='../Portfolio/ThirdDemo'
                />

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Food Nutrinex'
                  label='---------'
                  path='../Portfolio/ThirdDemo'
                /> 

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/FourthDemo'
                /> 

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/FifthDemo'
                /> 
                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/SixthDemo'
                /> 

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/SeventhDemo'
                /> 

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/EighthDemo'
                /> 

                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/NinthDemo'
                /> 
                
                <DemoIcon
                  data={<IoLogoReact size={175} color='turquoise'/>}
                  text='Other Projects in github'
                  label='---------'
                  path='../Portfolio/TenthDemo'
                /> 
            </div>

          </ul>
      </div>
    </div>
  );
}

export default Demos;
