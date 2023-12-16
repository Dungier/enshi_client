import { FC } from "react";
import { ISwitchType } from "./types";
import { Box, Button } from "@mui/material";

export const AnimeTypeSwitcher: FC<ISwitchType> = ({ type, setType }) => {
  return (
    <Box>
      <Button
        disabled={type === "high-rated"}
        onClick={() => setType("high-rated")}
      >
        Популярное
      </Button>
      <Button disabled={type === "new"} onClick={() => setType("new")}>
        Новинки
      </Button>
    </Box>
  );
};
