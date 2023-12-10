import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/configs/prisma.config";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", required: "false" },
        login: { label: "login", type: "text", required: "false" },
        password: { label: "password", type: "password", required: "true" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const userWhereUniqueInput = {} as Prisma.UserWhereUniqueInput;

        if (credentials.email) {
          userWhereUniqueInput.email = credentials.email;
        } else if (credentials.login) {
          userWhereUniqueInput.login = credentials.login;
        }

        const user = await prisma.user.findUnique({
          where: userWhereUniqueInput,
        });
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password || ""
        );

        if (!passwordsMatch) return null;

        const authorizedUser = {
          id: Number(user.id),
          email: user.email,
          login: user.login,
          avatar_url: user.avatar_url,
          minutes_watched: user.mintues_watched,
          createdAt: user.createdAt,
          admin: user.admin,
        };

        return await JSON.parse(await JSON.stringify(authorizedUser));
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },

  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },

  callbacks: {
    async session({ session, token, user, newSession, trigger }) {
      session.user = token;
      return session;
    },

    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.admin = user.admin;
        token.email = user.email;
        token.login = user.login;
        token.avatar_url = user.avatar_url;
        token.minutes_watched = user.minutes_watched;
        token.createdAt = user.createdAt;
        token.admin = user.admin;
      }

      return await token;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export default authOptions;
