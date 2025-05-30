import React from 'react';
import { ButtonVariant, ButtonSize } from '../button/Button.types';
import './Button.css';

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, onClick }) => {
  return (
    <button className={`button ${variant} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
