'use client';

import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Link href={"/application"}>
        <Button size='s' type='secondary' title={'Подключить подписку'} />
      </Link>
    </header>
  );
};

export default Header;
