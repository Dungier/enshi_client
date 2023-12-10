"use client";

import { BaseStyles, GlobalStyles } from "@/assets/styles";
import { ReactNode } from "react";

export const StylesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyles />
      <BaseStyles />
      {children}
    </>
  );
};
