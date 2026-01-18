


import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Techstack.css';


const TechIcon = ({icon, label, path, text=''}) =>
{

  return (
    <>
      <li className='tech__item'> 
        {/* Tech_item seperates each icon by a gap. */}
        
        <Link className='tech__item__link' to={path} >

          <figure className='tech__item__pic-wrap' data-category={label}>
            {icon}
          </figure>

        </Link>

      </li>
    </>
  );
};

// Props are properties that serve to pass data from parent to child components. 
TechIcon.propTypes = 
{
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};



export default TechIcon;
