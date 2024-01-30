import { Box, styled } from "@mui/material";
import Image from "next/image";

export const StyledImage = styled(Image)(() => ({
  borderRadius: 10,
}));

export const StyledContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
  padding: 10,
}));
