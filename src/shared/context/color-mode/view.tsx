"use client";

import { ReactNode, useEffect, useState } from "react";
import { ColorMode, ColorModeContext } from "./context";
import { setCookie, getCookie } from "@/app/actions";

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ColorMode>("dark");

  useEffect(() => {
    const handleInitializeCookies = async () => {
      const storedMode = await getCookie("theme");
      setMode((storedMode?.value as ColorMode) || "dark");
    };
    handleInitializeCookies();
  }, []);

  useEffect(() => {
    const handleSetCookies = async () => {
      await setCookie("theme", mode || "dark");
    };
    handleSetCookies();
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorModeContext.Provider value={{ mode: mode || "dark", toggleMode }}>
      <div className={mode}>{children}</div>
    </ColorModeContext.Provider>
  );
};
