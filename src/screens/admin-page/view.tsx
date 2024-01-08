"use client";

import { BlockedAnime } from "@/entites/blocked-anime";
import { BlockAnime } from "@/features/block-anime";
import { Box } from "@mui/material";
import { AdminSlider } from "@/entites/admin-slider";
import { AddToSlider } from "@/features/add-to-slider";
import { Popular } from "./lib/popular";
import { Top } from "./lib/top";

export const AdminPage = () => {
  return (
    <Box>
      <BlockedAnime />
      <BlockAnime />
      <AdminSlider type={"admin-get-sliders"} />
      <AddToSlider />
      <Popular />
      <Top />
    </Box>
  );
};
