import { Nunito } from 'next/font/google';

import './globals.css';
import React from 'react';
import Navbar from './components/navBar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from '@/app/components/modals/RegisterModal';
import ToasterProvider from '@/app/components/provider/ToasterProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
