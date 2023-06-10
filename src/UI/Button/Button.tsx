import { memo } from 'react';

interface ButtonProps {
  className?: string;
  title: string;
  children?: React.ReactElement;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = memo(
  ({ onClick, className, title, children }) => {
    return (
      <button
        onClick={onClick}
        type='button'
        className={`button${className ? ' ' + className : ''}`}>
        <span className='button__span'>{title}</span>
        {children && children}
      </button>
    );
  },
);

export default Button;
