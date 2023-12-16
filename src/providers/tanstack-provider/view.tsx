"use client";
import { FC, ReactNode, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const TanstackProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
