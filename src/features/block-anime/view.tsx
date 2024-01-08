"use client";
import { Box, Button, Grid } from "@mui/material";
import { SearchAnime } from "../search-anime";
import { useCallback, useState } from "react";
import { IAnime } from "@/shared/types/anime.types";
import { Anime } from "@/shared/components/anime";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { blockAnime } from "./model";

export const BlockAnime = () => {
  const [anime, setAnime] = useState<IAnime | null>(null);

  const handleSetAnime = useCallback(
    (anime: IAnime) => {
      setAnime(anime);
    },
    [anime]
  );
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationKey: ["block-anime"],
    mutationFn: async (data: IAnime) => await blockAnime(data.anime_id),
  });

  return (
    <Box>
      <SearchAnime setAnime={handleSetAnime} />
      {anime && (
        <>
          <Anime anime={anime} />
          <Grid container>
            <Grid item>
              <Button onClick={() => setAnime(null)}>Отмена</Button>
            </Grid>
            <Grid item>
              <Button
                onClick={async () => {
                  await mutateAsync(anime);
                  queryClient.refetchQueries({
                    queryKey: ["get-blocked-anime"],
                  });
                }}
              >
                Заблокировать
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};
