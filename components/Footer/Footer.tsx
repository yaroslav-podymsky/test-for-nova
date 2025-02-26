import React, { useState } from 'react';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import InstLogo from '../InstLogo/InstLogo';
import VkLogo from '../VkLogo/VkLogo';
import Facebook from '../Facebook/Facebook';
import ProcessingPolicyModal from '../ProcessingPolicyModal/ProcessingPolicyModal';

const Footer: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <a onClick={() => setIsShowModal(true)}>Политика обработки персональных данных</a>
      <div className={styles.linksBlock}>
        <InstLogo />
        <Facebook />
        <VkLogo />
      </div>
      {isShowModal && <ProcessingPolicyModal onClose={() => setIsShowModal(false)} />}
    </footer>
  );
};

export default Footer;
