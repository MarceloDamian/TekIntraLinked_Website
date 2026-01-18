

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Demo.css';


const DemoIcon = ({index, icon, label, path, headerText, footerText}) =>
{
  const alignmentClass = index % 2 === 0 ? 'align-left' : 'align-right';
 
  return (
    <>
      <h1>{headerText}</h1>
      <li className={`Demo__item ${alignmentClass}`}>

        <div className="Demo__item__content">
          <Link className="Demo__item__link" to={path}>
            <figure className="Demo__item__pic-wrap" data-category={label} />
            {icon}
          </Link>
          <div className="Demo__item__text">
            <h4>{footerText}</h4>
          </div>
        </div>

        
      </li>
    </>
  );
};

DemoIcon.propTypes = 
{
  index: PropTypes.number.isRequired,

  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default DemoIcon;
