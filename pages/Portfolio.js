
// Import React and useEffect hook for lifecycle management
import React, {useEffect} from 'react';
// Import DemoIcon component to display individual demo cards
import DemoIcon from '../src/components/DemoIcon';
// Import demo data array to populate portfolio sections
import DemoData from '../src/components/DemoData';

// Import BottomFooter component for page footer
import BottomFooter from '../src/components/BottomFooter';

import { demoTechs } from './../src/components/techConfig';
import TechIcons from './../src/components/SmallTechIcons';


// TODO: Possibly use MouseWheel Control from swiperjs.com to improve demo navigation
// TODO: Consider changing background color to a dark theme
// Note: Demo.css styles are applied in DemoIcon component

// PortfolioSections component renders a list of demo cards from provided data
const PortfolioSections = ({ FullSet }) => (
  <>
    {
      // Map over demo data to render each DemoIcon component
      FullSet.map((demo, index) => (
        <DemoIcon
          key={index}
          index={index}
          headerText={demo.headerText}
          icon={demo.icon}
          // label={demo.label} // label currently unused
          path={demo.path}
          footerText={demo.footerText}
          demoLabel={demo.demoLabel}
        />
          // <TechIcons labels={demoTechs.firstDemo} size={60} />

      ))
    }
  </>
);

/*
  Portfolio component represents the portfolio page
  It scrolls to top on mount and renders portfolio sections
  and a bottom footer
  Portfolio demos are categorized by skill (Web dev, AI, Mobile app)
*/
const Portfolio= () =>
{
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0) 
  });
  
  return (
    <>
      {/* Wrapper div with class 'Demo' for styling */}
      <div className='Demo'>
        {/* <div className='Demo__container'> */}
            {/* Render portfolio sections with demo data */}
            <PortfolioSections FullSet={DemoData} />
        {/* </div> */}
      </div>
      {/* Render bottom footer component */}
      <BottomFooter />
    </>
  );
}

// Export Portfolio component as default
export default Portfolio;
