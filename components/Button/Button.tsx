'use client';

import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import Loader from '../Loader/Loader';

type TProps = {
  title: string;
  type?: "primary" | "secondary";
  size?: "m" | "s";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isLoading?: boolean
}

const Button: React.FC<TProps> = ({ title, type = "primary", size = "m", onClick, className, isLoading }) => {
  return (
    <button className={cn(styles.button, className, {
      [styles.secondary]: type === "secondary",
      [styles.sizeS]: size === "s",
    })}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : <p>{title}</p>}
    </button>
  );
};

export default Button;
