import React from 'react';
import Link from 'next/link';
import DescriptionBlock from '@/components/DescriptionBlock/DescriptionBlock';
import SliderBlock from '@/components/SliderBlock/SliderBlock';
import styles from "./page.module.css"
import CardsBlock from '@/components/CardsBlock/CardsBlock';


export default function HomePage() {
  return (
    <div className={styles.root}>
      <DescriptionBlock />
      <SliderBlock />
      <CardsBlock />
      <Link href='/application'>Перейти к странице заявки</Link>
    </div>
  );
}