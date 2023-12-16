import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
export const Anime: FC<{ anime: IAnime }> = ({ anime }) => {
  return (
    <Box>
      <Image
        src={anime.material_data.poster_url}
        alt={anime.title}
        width={200}
        height={200}
      />
      <Typography>{anime.title}</Typography>
    </Box>
  );
};
