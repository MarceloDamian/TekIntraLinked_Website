
import {React, useEffect} from 'react';
import DemoIcon from '../components/DemoIcon';
<<<<<<< HEAD

import DemoData from '../components/DemoData';
=======
import DemoData from '../components/DemoData';
import "./../components/Demo.css";
>>>>>>> Current-Copy


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
<<<<<<< HEAD
=======
          index={index}
>>>>>>> Current-Copy
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
  
<<<<<<< HEAD
  let StartSubset = DemoData.slice(0,3);
  let EndingSubset = DemoData.slice(3,11);

  return (
    <div className='Demo'>
      <div className='Demo__container'>
        <div className="flex hstack">
          <PortfolioSections FullSet={StartSubset} />
        </div>

        <ul className='Demo__items'>                
          <div className="flex vstack">
          <PortfolioSections FullSet={EndingSubset} />
          </div>
        </ul>

=======
  return (
    <div className='Demo'>
      <div className='Demo__container'>
          <PortfolioSections FullSet={DemoData} />
>>>>>>> Current-Copy
      </div>
    </div>
  );
}

export default Portfolio_;
