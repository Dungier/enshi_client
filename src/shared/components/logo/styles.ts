"use client";
import { styled } from "@mui/material";

export const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.purple.main,
}));

export const StyledLogo = styled("h1")(({ theme }) => ({
  color: "#FFF",
  fontSize: 30,
  fontWeight: 700,
}));
