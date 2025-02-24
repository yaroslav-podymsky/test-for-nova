import React from 'react';
import styles from './Logo.module.css';
import logo from '../../resources/images/logo.png'
import Image from 'next/image';
import cn from 'classnames'

type TProps = {
  className?: string;
}
const Logo: React.FC<TProps> = ({ className }) => {
  return (
    <Image className={cn(styles.logo, className)} src={logo} alt="Логотип" />
  );
};

export default Logo;
