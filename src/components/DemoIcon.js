// Import React, Next.js Link, and PropTypes
import React from 'react';
import Link  from "next/link";
import PropTypes from 'prop-types';

// DemoIcon renders a portfolio demo card with alternating alignment
const DemoIcon = ({index, icon, path, headerText, footerText}) =>
{
  // Alternate alignment for visual variety based on index
  const alignmentClass = index % 2 === 0 ? 'align-left' : 'align-right';
 
  return (
    <div className="Demo_Wrapper">
      {/* Header text for the demo */}
      <h1>{headerText}</h1>
      <li className={`Demo__item ${alignmentClass}`}>
        <div className="Demo__item__content">
          {/* Link to the demo page wraps the icon/media */}
          <Link className="Demo__item__link" href={path|| '/'}>
            <figure className="Demo__item__pic-wrap"  />
            {/* Display the media/icon for the demo */}
            {icon}
          </Link>
          {/* Footer text describing the demo */}
          <div className="Demo__item__text">
            {footerText}
          </div>
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
};

export default DemoIcon;
