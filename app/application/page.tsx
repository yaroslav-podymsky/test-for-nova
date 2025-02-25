import Form from '@/components/Form/Form';
import React from 'react';
import styles from "./styles/Application.module.css"
import { FC } from 'react';
import InfoBlock from '@/components/InfoBlock/InfoBlock';

const ApplicationPage: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Form />
        <InfoBlock />
      </div>
    </div>
  );
}

export default ApplicationPage;