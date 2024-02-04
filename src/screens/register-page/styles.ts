import { styled } from "@mui/material";

export const StyledContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  background: "#1F1F25",
  height: "33rem",
  borderRadius: "1rem",
}));
export const FormDiv = styled("div")(() => ({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const StyledForm = styled("form")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const StyledDiv = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledNotificationError = styled("div")(() => ({
  width: "auto",
  display: "flex",
  justifyContent: "left",
  alignItems: "flex-start",
  color: "red",
  fontSize: "14px",
}));
