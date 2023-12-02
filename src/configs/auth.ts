import type { AuthOptions, NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import commonAxios from "./axios";
import { cookies } from "next/headers";
import { parse } from "cookie";

export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: false },
        login: { label: "login", type: "text", required: false },
        password: { label: "password", type: "password", required: true },
        operation: { type: "hidden" },
      },
      async authorize(credentials) {
        if (credentials) {
          const body = {
            email: credentials.email,
            login: credentials.login,
            password: credentials.password,
          };

          try {
            const { data, headers } = await commonAxios.post(
              `/auth/${credentials.operation}`,
              body
            );

            const apiCookies = headers["set-cookie"];
            let refresh_token = "";

            if (apiCookies && apiCookies.length > 0) {
              apiCookies.forEach((cookie) => {
                const parsedCookie = parse(cookie);
                const [cookieName, cookieValue] =
                  Object.entries(parsedCookie)[0];
                const httpOnly = cookie.includes("httponly;");

                cookies().set({
                  name: cookieName,
                  value: cookieValue as string,
                  httpOnly: httpOnly,
                  maxAge: parseInt(parsedCookie["Max-Age"]),
                  path: parsedCookie.path,
                  sameSite: "strict",
                  expires: new Date(parsedCookie.expires),
                  secure: true,
                });

                if (cookieName === "refresh_token") {
                  refresh_token = cookieValue as string;
                }
              });
            }

            const { accessToken: access_token, user } = data;

            cookies().set({
              name: "access_token",
              value: access_token,
              httpOnly: true,
              sameSite: "strict",
              secure: true,
            });

            return {
              access_token,
              refresh_token,
              ...user,
            };
          } catch (error) {
            console.error("Error during registration request:", error);
            throw new Error("Failed to register user");
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.refresh_token = user.refresh_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.refresh_token = token.refresh_token;
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
  //   callbacks: {
  //     redirectTo: null,
  //     async signIn(user, account, profile) {
  //       try {
  //         const response = await fetch("/api/auth/google", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ user, account, profile }),
  //         });

  //         if (!response.ok) {
  //           throw new Error("Failed to send data to the server");
  //         }

  //         return Promise.resolve(true);
  //       } catch (error) {
  //         console.error("Error during signIn callback:", error.message);
  //         return Promise.resolve(false);
  //       }
  //     },
  //   },
};
