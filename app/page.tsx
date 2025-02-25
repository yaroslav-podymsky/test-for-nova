import React from 'react';
import DescriptionBlock from '@/components/DescriptionBlock/DescriptionBlock';
import SliderBlock from '@/components/SliderBlock/SliderBlock';
import styles from "./page.module.css"
import CardsBlock from '@/components/CardsBlock/CardsBlock';
import MapBlock from '@/components/MapBlock/MapBlock';


export default function HomePage() {
  return (
    <div className={styles.root}>
      <DescriptionBlock />
      <SliderBlock />
      <CardsBlock />
      <MapBlock />
    </div>
  );
}