

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.css';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const STYLES = ['btn--outline'];
const SIZES = ['btn--medium', 'btn--Large'];



const getButtonStyle = (buttonStyle) => 
{
  return STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
};

const getButtonSize = (buttonSize) => 
{
  return SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
};

export const Button = ({children, type = 'button', onClick = () => {}, 
buttonStyle = STYLES[0], buttonSize = SIZES[0], linkTo = '/ContactUs'}) => 
{
  const style = getButtonStyle(buttonStyle);
  const size = getButtonSize(buttonSize);

  return (
    // <Link to={linkTo} className="btn-mobile">
    <Link to={linkTo}>
      {/* Not sure if this is the correct way to do this, but it works. */}
      <button className={`btn ${style} ${size}`} onClick={onClick} type={type}>
        {children}
        {console.log(children)}
      </button>
    </Link>
  );
};

Button.propTypes = 
{
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.oneOf(STYLES),
  buttonSize: PropTypes.oneOf(SIZES),
  linkTo: PropTypes.string
};

export default Button;






// import React from 'react';
// import './Button.css';

// import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => 
// {
//   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <Link to='/ContactUs' className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };
