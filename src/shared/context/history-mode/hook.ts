"use client";

import { useContext } from "react";
import { UserHistoryContext } from "./context";

export const useUserHistoryMode = () => {
  const context = useContext(UserHistoryContext);
  if (!context) {
    throw new Error(
      "useUserHistoryMode must be used within a ColorModeProvider"
    );
  }

  return context;
};
