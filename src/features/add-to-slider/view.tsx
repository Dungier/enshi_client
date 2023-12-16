"use client";
import { Box, Button } from "@mui/material";
import { AddSliderModal } from "./lib/add-slider-modal/view";
import { useState } from "react";

export const AddToSlider = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Добавить слайд</Button>
      <AddSliderModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};
