import React from 'react';

import ClientOnly from '@/app/components/ClientOnly';
import Contents from '@/app/components/contents/Contents';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import Navbar from '@/app/components/navBar/Navbar';

import getCurrentUser from '@/app/actions/getCurrentUser';
import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <Contents />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
