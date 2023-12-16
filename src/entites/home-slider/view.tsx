import { IAnimeSlider } from "@/shared/types/slider.types";
import { Box } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

export const HomeSlider: FC<{ sliders: IAnimeSlider[] }> = ({ sliders }) => {
  return (
    <Box>
      {sliders.map((slider) => (
        <Box>{slider.title}</Box>
      ))}
    </Box>
  );
};
