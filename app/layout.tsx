import React, { FC } from 'react';
import './styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
