import React from "react";
import { FaPython, FaHtml5, FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { SiDart } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";


import techData from './techData';

import TechIcon from "./TechIcon"; // techstack.css is in TechIcon

// Move cards to Portfolio file. Home and Portfolio have to be different.
// Each card should inevitably link to another page with a code or demo.
// Each demo should work by itself.

const Tech = () => {
  // TODO: Add a carousel for the icons
  // TODO: Carousel use Swiperjs.com
  // TODO: Fix the footer
  // TODO: Enhance the portfolio website and add text
  // TODO: Adjust the layout and possibly change the video
  // TODO: Complete V1 of the website

  return (
    <div className="tech">
      {/* Main container for the tech section */}
      <h1> TECHSTACK:</h1> {/* Section heading */}
      {/* Seperate these Portfolio based on skill // Web dev // AI machine learning // Mobile app (Full Stack) */}
      <div className="tech__container">
        {/* Container for the tech icons */}
        <ul className="tech__items">
          {/* List of tech icons */}
          {/* use cararsoul code in https://medium.com/@divyakoneti0001/how-to-create-an-autoplay-or-infinite-carousel-in-react-d9f9bff11048  */}
          {
            techData.map((tech, index) => (
              <TechIcon
                key={index}
                icon={tech.icon}
                label={tech.label}
                path={tech.path}
                text=""
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Tech;
