


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
          {/* <FaPython size={200} color='black'/> */}

          <figure className='tech__item__pic-wrap' data-category={label} />
            {icon}

          <div className='tech__item__info'>
            <h5 className='tech__item__text'> {text} </h5>
          </div>

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
  text: PropTypes.string,
};



export default TechIcon;
