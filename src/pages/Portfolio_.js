
import {React, useEffect} from 'react';
import DemoIcon from '../components/DemoIcon';
import DemoData from '../components/DemoData';
import "./../components/Demo.css";


// TODO: Possibly use MouseWheel Control from swiperjs.com 
// TODO: to better perform this and fix this. 

// TODO: Change background color to dark? maybe not black

// Demo.css is in DemoIcon

// Move Demo to Portfolio file. Home and Portfolio have to be different. 
// Each card should inevitably link to another page with a code or demo. 
// Each demo should work by itself. 

const PortfolioSections = ({ FullSet }) => (
  <>
    {
      FullSet.map((demo, index) => (
        <DemoIcon
          key={index}
          index={index}
          icon={demo.icon}
          label={demo.label}
          path={demo.path}
          headerText={demo.headerText}
          footerText={demo.footerText}
        />
      ))
    }
  </>
);

/* Seperate these Portfolio based on skill // Web dev // AI machine learning // Mobile app (Full Stack) */
const Portfolio_= () =>
{
  useEffect(() => {
    window.scrollTo(0, 0) 
  });
  
  return (
    <div className='Demo'>
      <div className='Demo__container'>
          <PortfolioSections FullSet={DemoData} />
      </div>
    </div>
  );
}

export default Portfolio_;
