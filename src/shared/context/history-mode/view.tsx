"use client";

import { ReactNode, useCallback, useState } from "react";
import { HistoryMode, UserHistoryContext } from "./context";

export const UserHistoryModeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<HistoryMode>("viewed");

  const toggleMode = useCallback(
    (mode: HistoryMode) => {
      setMode(mode);
    },
    [mode]
  );

  return (
    <UserHistoryContext.Provider value={{ mode: mode || "viewed", toggleMode }}>
      {children}
    </UserHistoryContext.Provider>
  );
};
