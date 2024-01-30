import { Box, Button, styled } from "@mui/material";

export const StyledMenuButton = styled(Button)(() => ({
  width: 50,
  height: 50,
  background: "#333238",
  display: "flex",
  flexDirection: "column",
  ": hover": {
    background: "#16151A",
  },
}));

export const StyledMenuSpan = styled("span")<{
  rotateZ: number;
  hidden: boolean;
}>(({ hidden, rotateZ }) => ({
  background: "#fff",
  height: 2,
  width: 24,
  borderRadius: 1,
  display: hidden ? "none" : "block",
  transform: `rotateZ(${rotateZ}deg)`,
  transition: "0.3s",
}));

export const StyledPopoverContainer = styled(Box)(() => ({
  padding: 30,
  display: "flex",
  flexDirection: "column",
  gap: 20,
}));
