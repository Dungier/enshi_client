"use client";

import { styled } from "@mui/material/styles";

type Mode = "light" | "dark";

type ThemeTogglerProps = {
  mode: Mode;
};

export const ThemeTogglerStyles = styled("div")(({ theme }) => ({
  width: 80,
  height: "38px",
  background: "#333238",
  borderRadius: 8,
  position: "relative",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
}));

export const IconStyles = styled("span")(({ theme }) => ({
  position: "relative",
  zIndex: 5,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ThemeTogglerCircleStyles = styled("div")<ThemeTogglerProps>(
  ({ theme, mode }) => ({
    width: "40px",
    height: "100%",
    background: "#434249",
    position: "absolute",
    borderRadius: 8,
    transition: "all 0.3s ease-in-out",
    transform: `translateX(${mode === "dark" ? "0" : "40px"})`,
    top: "0",
    zIndex: 1,
  })
);
