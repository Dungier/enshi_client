"use client";

import { Container, styled } from "@mui/material";

export const StyledHeader = styled("header")(() => ({
  background: "#1F1F25",
  height: 100,
}));

export const StyledContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
}));
