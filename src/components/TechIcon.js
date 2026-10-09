// Import React and necessary dependencies
import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

// TechIcon component renders a single technology icon with a link
const TechIcon = ({icon, label, path}) =>
{
  return (
    <>
      {/* List item for individual tech icon with spacing */}
      <div className='tech__item'>
        {/* The label previously lived only in data-category, which never reaches
            the accessibility tree, so these links announced as "link" or as the
            image filename. aria-label gives each one a real name. */}
        <Link
          className='tech__item__link'
          href={path|| '/'}
          aria-label={label}
        >
          {/* Figure element with data-category attribute for label */}
          <figure
            className='tech__item__pic-wrap'
            data-category={label}
            aria-hidden="true"
          >
            {/* Render the icon element passed as prop */}
            {icon}
          </figure>
        </Link>
      </div>
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
