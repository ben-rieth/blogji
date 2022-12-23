import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../utils/db';

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
    ],
    session: { strategy: 'jwt' }
})