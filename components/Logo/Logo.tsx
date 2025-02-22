import React from 'react';
import styles from './Logo.module.css';
import logo from '../../resources/images/logo.png'
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Image className={styles.logo} src={logo} alt="Логотип" />
  );
};

export default Logo;
