import React from 'react';
import { useRipple } from '../hooks/useRipple';


const RippleButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = '',
  onClick,
  ...rest
}) => {
  const ripple = useRipple();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    ripple(event);
    onClick?.(event); // call original onClick if exists
  };

  return (
    <button
      className={`btn ripple-button ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default RippleButton;
