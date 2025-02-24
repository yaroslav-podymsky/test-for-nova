'use client';
import React, { FC } from 'react';
import './styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from '../store/store';


interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='ru'>
      <Provider store={store}>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
