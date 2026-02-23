// Import React, Next.js Link, and PropTypes for validation
import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

// Allowed styles and sizes for the Button component
const STYLES = ['btn--outline'];
const SIZES = ['btn--medium', 'btn--Large', 'btn--Extra-Large'];

// Helper to validate style prop and fall back to default
const getButtonStyle = (buttonStyle) => 
{
  return STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
};

// Helper to validate size prop and fall back to default
const getButtonSize = (buttonSize) => 
{
  return SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
};

// Button component that wraps a button with a Next.js Link
const Button = ({children, type = 'button', onClick = () => {}, 
buttonStyle = STYLES[0], buttonSize = SIZES[0], linkTo}) => 
{
  const style = getButtonStyle(buttonStyle);
  const size = getButtonSize(buttonSize);

  return (
    <Link href={linkTo|| '/'}>
      <button className={`btn ${style} ${size}`} onClick={onClick} type={type}>
        {/* Render children as button content */}
        {children}
      </button>
    </Link>
  );
};

// PropTypes for Button component
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
