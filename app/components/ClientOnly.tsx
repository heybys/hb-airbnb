'use client';

import { SessionProvider } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const ClientOnly: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientOnly;
