// Import React and necessary dependencies
import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

// TechIcon component renders a single technology icon with a link
const TechIcon = ({icon, label, path, text=''}) =>
{
  return (
    <>
      {/* List item for individual tech icon with spacing */}
      <li className='tech__item'> 
        {/* Link wraps the icon and navigates to the specified path or home '/' if none provided */}
        <Link className='tech__item__link' href={path|| '/'} >
          {/* Figure element with data-category attribute for label */}
          <figure className='tech__item__pic-wrap' data-category={label}>
            {/* Render the icon element passed as prop */}
            {icon}
          </figure>
        </Link>
      </li>
    </>
  );
};

// PropTypes validate expected prop types for the component
TechIcon.propTypes = 
{
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// Export TechIcon component as default
export default TechIcon;
