import prismaClient from '@/app/libs/prismadb';
import { SafeUser } from '@/app/types';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import { getServerSession } from 'next-auth/next';

export async function getSession() {
  return getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prismaClient.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    } as SafeUser;
  } catch (error: any) {
    return null;
  }
}
