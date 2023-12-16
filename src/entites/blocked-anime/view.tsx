"use client";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import BlockAnimeService from "./model";
import { Anime } from "@/shared/components/anime";
export const BlockedAnime = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-blocked-anime"],
    queryFn: async () => await BlockAnimeService.getBlocked(),
  });
  return (
    <Box>
      {!isLoading &&
        data &&
        data.map((anime) => <Anime anime={anime} key={anime.anime_id} />)}
    </Box>
  );
};
