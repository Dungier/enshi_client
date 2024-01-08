"use client";

import { createContext } from "react";

export type HistoryMode = "viewed" | "favourite";

interface UserHistoryContextType {
  mode: HistoryMode;
  toggleMode: (arg: HistoryMode) => void;
}

export const UserHistoryContext = createContext<
  UserHistoryContextType | undefined
>(undefined);
