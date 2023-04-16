'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import Container from '@/app/components/Container';

const Contents = () => {
  const session = useSession();
  return (
    <Container>
      <div>contents</div>
      <div>contents</div>
      <div>contents</div>
      <div>contents</div>
      <div>contents</div>
      <div>contents</div>
      <div>{session.status}</div>
    </Container>
  );
};

export default Contents;
