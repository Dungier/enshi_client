"use client";

import styled from "@emotion/styled/base";
import { Button } from "@mui/material";
import Image from "next/image";

export const StyledButton = styled(Button)(() => ({
  background: "#333238",
  borderRadius: 10,
  width: 160,
  height: 50,
  textAlign: "center",
  position: "relative",
  ":hover": {
    background: "#16151A",
  },
}));

export const StyledImage = styled(Image)(() => ({
  position: "absolute",
  left: "0px",
  top: 0,
  height: "100%",
  width: 50,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
}));
