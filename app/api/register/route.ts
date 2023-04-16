import prismaClient from '@/app/libs/prismadb';

import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;
  console.log(body);

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismaClient.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
