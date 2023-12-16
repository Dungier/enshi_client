"use client";
import { FC, useState } from "react";
import { AddAnimeProps } from "./types";
import { Box, Button } from "@mui/material";
import { AddAnimeModal } from "./lib/add-anime-modal";

export const AddAnime: FC<AddAnimeProps> = ({ type }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Добавить аниме</Button>
      <AddAnimeModal open={open} onClose={() => setOpen(false)} type={type} />
    </Box>
  );
};
