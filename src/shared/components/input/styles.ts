"use client";

import { styled } from "@mui/material/styles";

export const InputStyles = styled("input")(({ theme }) => ({
  width: "100%",
  outline: "none",
  background: theme.palette.gray.main,
  borderRadius: "10px",
  padding: "0.875rem 1.25rem",
  border: `2px solid transparent`,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: 500,
  color: theme.palette.text.primary,
  textAlign: "center",

  "&:focus": {
    border: `2px solid ${theme.palette.purple.main}`,
  },

  "&.Input-error": {
    border: `2px solid ${theme.palette.error.main}`,
  },

  "&.Input-align-left": {
    textAlign: "left",
  },

  "&.Input-disabled": {
    userSelect: "none",
    color: "#A9B7BD",
  },

  "&::-webkit-input-placeholder": {
    color: "#A9B7BD",
  },
  "&:-moz-placeholder": {
    color: "#A9B7BD",
  },
  "&::-moz-placeholder": {
    color: "#A9B7BD",
  },
  "&:-ms-input-placeholder": {
    color: "#A9B7BD",
  },
}));
