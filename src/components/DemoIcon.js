// Import React, Next.js Link, and PropTypes
import React from 'react';
import Link  from "next/link";
import PropTypes from 'prop-types';
import TechIcon from './TechIcon';
import techData from './techData';
import { demoTechs } from './techConfig';
import SmallTechIcons from './SmallTechIcons';


// DemoIcon renders a portfolio demo card with alternating alignment
const DemoIcon = ({index, icon, path, headerText, footerText, demoLabel,
}) =>
{
  // Alternate alignment for visual variety based on index
  const alignmentClass = index % 2 === 0 ? "align-left" : "align-right";

  // const desiredOrder = ["REACT","JAVASCRIPT", "HTML", "CSS"];
  // const orderedTechs = desiredOrder.map(label => techData.find(tech => tech.label === label)
  // ).filter(Boolean);
  // filter out any undefined if label not found
  // const techLabels = demoTechs[demoLabel] || [];
  

  return (
    <div className="Demo_Wrapper">
      {/* Header text for the demo */}
      <h1>{headerText}</h1>
      <li className={`Demo__item ${alignmentClass}`}>
        
        <div className="Demo__item__content">
          {/* Link to the demo page wraps the icon/media */}
          
          <div className="Demo__item__With__Icons">
         
            <Link className="Demo__item__link" href={path || "/"}>
              {/* Display the media/icon for the demo */}
              {icon}
            </Link>
            <div className="Icons__Container">
              <SmallTechIcons labels={demoTechs[demoLabel] || []} path_={`/Portfolio/${demoLabel}`}size={60} />
            </div>
         
          </div>
        
              {/* Footer text describing the demo */}
          <div className="Demo__item__text">{footerText}</div>
        
        </div>

      </li>
    </div>
  );
};

// PropTypes for validation of DemoIcon props
DemoIcon.propTypes = 
{
  index: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  // label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  
  demoLabel: PropTypes.string.isRequired,

};

export default DemoIcon;
