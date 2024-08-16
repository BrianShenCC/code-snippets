import React from 'react';
import classNames from 'classnames';
import './button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'app-button',

        {
          'app-button--small': size === 'small',
          'app-button--medium': size === 'medium',
          'app-button--large': size === 'large'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
