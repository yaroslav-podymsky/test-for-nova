import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
// import Link from 'next/link';
import InstLogo from '../InstLogo/InstLogo';
import VkLogo from '../VkLogo/VkLogo';
import Facebook from '../Facebook/Facebook';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <a>Политика обработки персональных данных</a>
      <div className={styles.linksBlock}>
        <InstLogo />
        <Facebook />
        <VkLogo />
      </div>
    </footer>
  );
};

export default Footer;
