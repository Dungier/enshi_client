"use client";
import { Button, styled, Box } from "@mui/material";

export const StyledContactButton = styled(Button)(() => ({
  width: 50,
  height: 50,
  borderRadius: 10,
  background: "#333238",
  backdropFilter: "blur(7.5px)",
  ": hover": {
    background: "#16151A",
  },
}));

export const StyledContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: 245,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width: 699px)": {
    display: "none",
  },
}));
