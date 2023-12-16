import { BlockedAnime } from "@/entites/blocked-anime";
import { BlockAnime } from "@/features/block-anime";
import { Box } from "@mui/material";
import { AdminSlider } from "@/entites/admin-slider";
import { AddToSlider } from "@/features/add-to-slider";
import { AddAnime } from "@/features/add-anime";

export const AdminPage = () => {
  return (
    <Box>
      <BlockedAnime />
      <BlockAnime />
      <AdminSlider type={"admin-get-sliders"} />
      <AddToSlider />
      <AdminSlider type={"admin-get-popular"} />
      <AddAnime type={"admin-get-popular"} />
      <AdminSlider type={"admin-get-top"} />
      <AddAnime type={"admin-get-top"} />
    </Box>
  );
};
