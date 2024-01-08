"use client";

import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "@/shared/components/anime";
import { getBlocked } from "./model";
import { IAnime } from "@/shared/types/anime.types";

export const BlockedAnime = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-blocked-anime"],
    queryFn: async () => await getBlocked(),
  });
  return (
    <Box>
      {!isLoading &&
        data &&
        data.map((anime) => (
          <Anime anime={anime as IAnime} key={anime.anime_id} />
        ))}
    </Box>
  );
};
