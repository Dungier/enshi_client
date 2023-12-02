"use client";
import { useSession } from "next-auth/react";

export const HomePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not authenticated. Please log in.</p>;
  }

  const { user } = session;
  console.log(user);
  return <main></main>;
};
