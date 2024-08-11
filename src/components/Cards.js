import React from 'react';
import { FaPython, FaHtml5 , FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { SiDart } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";


import TechIcon from './TechIcon'; // techstack.css is in TechIcon



// Move cards to Portfolio file. Home and Portfolio have to be different. 
// Each card should inevitably link to another page with a code or demo. 
// Each demo should work by itself. 

function Tech() 
{

  return (
    <div className='tech'>
      <h1 className='tech_quote'>"The man who loves walking will go further than the man who loves the destination." Lao Tzu </h1>
      <h1> Techstack (2024):</h1>
      <h2>Technologies I am most familiar with: </h2>
      {/* Seperate these Portfolio based on skill // Web dev // AI machine learning // Mobile app (Full Stack) */}
      <Scrolltest/>
      <div className='tech__container'>
          <ul className='tech__items'>         

            <TechIcon
              // src='images/img-4.jpg'
              data={<FaPython size={175} color='black'/>}
              text='Python'
              label='PYTHON'
              path='/Portfolio'
            />

            <TechIcon
              // src='images/img-4.jpg'
              data={<SiCplusplus size={175} color='black'/>}
              text=' '
              label='C++'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<IoLogoReact size={175} color='black'/>}

              text=' '
              label='REACT'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<SiDart size={175} color='black' />}

              text=' '
              label='DART'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<VscTerminalBash size={175} color='black'/>}
              text=' '
              label='BASH'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<IoLogoJavascript size={175} color='black'/>}
              text=' '
              label='JAVASCRIPT'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<FaSwift size={175} color='black'/>}
              text=' '
              label='SWIFT'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<FaHtml5 size={175} color='black'/>}
              text='hello '
              label='HTML'
              path='/Portfolio'
            />
            <TechIcon
              // src='images/img-4.jpg'
              data={<FaCss3Alt size={175} color='black'/>}

              text=' '
              label='CSS'
              path='/Portfolio'
            />

          </ul>
      </div>
    </div>
  );
}




export default Tech;
