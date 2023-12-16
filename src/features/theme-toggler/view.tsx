"use client";

import React, { forwardRef } from "react";
import IcMoon from "@/assets/icons/ic_moon.svg";
import IcSun from "@/assets/icons/ic_sun.svg";
import { useColorMode } from "@/shared/context/color-mode";
import {
  IconStyles,
  ThemeTogglerCircleStyles,
  ThemeTogglerStyles,
} from "./styles";
import Image from "next/image";

export const ThemeToggler = forwardRef<HTMLDivElement>((props, ref) => {
  const { mode, toggleMode } = useColorMode();

  return (
    <ThemeTogglerStyles {...props} onClick={toggleMode}>
      <IconStyles>
        <Image src={IcSun} alt={"Светлая тема"} />
      </IconStyles>
      <IconStyles>
        <Image src={IcMoon} alt={"Темная тема"} />
      </IconStyles>
      <ThemeTogglerCircleStyles mode={mode} />
    </ThemeTogglerStyles>
  );
});
