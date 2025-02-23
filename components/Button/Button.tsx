'use client';

import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type TProps = {
  title: string;
  type?: "primary" | "secondary";
  size?: "m" | "s";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<TProps> = ({ title, type = "primary", size = "m", onClick, className }) => {
  return (
    <button className={cn(styles.button, className, {
      [styles.secondary]: type === "secondary",
      [styles.sizeS]: size === "s",
    })}
      onClick={onClick}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
