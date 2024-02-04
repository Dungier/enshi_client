import { styled } from "@mui/material";

export const AnimeCard = styled("div")(() => ({
  display: "inline-flex",
  position: "relative",
  width: "196px",
  height: "363px",
  flexDirection: "column",
  margin: "1rem 2.15rem 1rem 0rem",
  color: "#F5F5F5",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  letterSpacing: "0.3px",
}));

export const AnimeCardText = styled("div")(() => ({
  width: "auto",
}));

export const AnimeYearGenreContainer = styled("div")(() => ({
  width: "auto",
  display: "inline-flex",
  justifyContent: "space-around",
  color: "#B1ADB1",
}));
export const StarIconContainer = styled("div")(() => ({
  display: "flex",
  height: "2rem",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  position: "absolute",
  top: "87.4%",
  backgroundColor: "#1CBA6E",
  color: "white",
  padding: "5px",
  borderRadius: "0 1rem",
}));
