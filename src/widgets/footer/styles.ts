"use client";
import { Container, styled } from "@mui/material";

export const StyledFooter = styled("footer")(() => ({
  height: 200,
  background: "#1F1F25",
}));

export const StyledCopyRight = styled("h3")(() => ({
  color: "#A8A8A8",
  fontSize: 15,
  fontWeight: 600,
  letterSpacing: "0.3px",
  marginTop: 16,
}));

export const StyledContainer = styled(Container)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width: 420px)": {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    gap: 10,
  },
}));
