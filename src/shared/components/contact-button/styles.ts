"use client";
import { Button, styled } from "@mui/material";

export const StyledContactButton = styled(Button)(() => ({
  width: 185,
  height: 50,
  background: "transparent",
  borderRadius: 5,
  border: "2px solid #828282",
  color: "#A8A8A8",
  fontSize: 16,
  ": hover": {
    background: "#16151A",
  },
}));
