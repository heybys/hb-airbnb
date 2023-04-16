import { PrismaClient } from '@prisma/client';

declare global {
  var prismaClient: PrismaClient | undefined;
}

const prismaClient = globalThis.prismaClient || new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
  // console.log('globalThis.prisma : ', globalThis.prismaClient);
  // console.log('client : ', prismaClient);

  globalThis.prismaClient = prismaClient;
}

export default prismaClient;
