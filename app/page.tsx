import React from 'react';
import Link from 'next/link';
import DescriptionBlock from '@/components/DescriptionBlock/DescriptionBlock';

export default function HomePage() {
  return (
    <div>
      <DescriptionBlock />
      <h1>Главная страница</h1>
      <p>Добро пожаловать на главную страницу нашего приложения.</p>
      <Link href='/application'>Перейти к странице заявки</Link>
    </div>
  );
}