"use client";

import React, { forwardRef } from "react";
import IcMoon from "@/src/app_root/assets/icons/theme-toggler/ic_moon.svg";
import IcSun from "@/src/app_root/assets/icons/theme-toggler/ic_sun.svg";
import { useColorMode } from "@/shared/context/color-mode";

export const ThemeToggler = () => {
  const { mode, toggleMode } = useColorMode();

  return <button onClick={toggleMode}>сменить тему</button>;
};
