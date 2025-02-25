'use client';

import React from 'react';
import styles from './Logo.module.css';
import logo from '../../resources/images/logo.png'
import Image from 'next/image';
import cn from 'classnames'
import { useRouter } from 'next/navigation';

type TProps = {
  className?: string;
}
const Logo: React.FC<TProps> = ({ className }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/');
  };

  return (
    <Image onClick={handleNavigation} className={cn(styles.logo, className)} src={logo} alt="Логотип" />
  );
};

export default Logo;
