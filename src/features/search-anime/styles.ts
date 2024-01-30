"use client";

import { styled, Box } from "@mui/material";
import Image from "next/image";

export const StyledSearchContainer = styled(Box)(() => ({
  position: "relative",
  maxWidth: 330,
  width: "100%",
}));

export const StyledImage = styled(Image)(() => ({
  position: "absolute",
  top: 13,
  right: 15,
}));
