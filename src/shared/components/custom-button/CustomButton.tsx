import React, { type ButtonHTMLAttributes } from 'react';
import './CustomButton.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bordered?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  bordered = false, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`custom-btn ${bordered ? 'custom-btn--bordered' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
