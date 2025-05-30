

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Demo.css';


const DemoIcon = ({icon, label, path, headerText, footerText}) =>
{
  return (
    <>
      <h1>{headerText}</h1>
        <li className='Demo__item'>
          <Link className='Demo__item__link' to={path} >
            <figure className='Demo__item__pic-wrap' data-category={label}/>
              {icon}
          </Link>
        </li>
      <h4>{footerText}</h4>
    </>
  );
};

DemoIcon.propTypes = 
{
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default DemoIcon;
