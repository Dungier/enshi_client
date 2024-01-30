import { Box, List, ListItem, Popover, Typography } from "@mui/material";
import { FC } from "react";
import { SearchItem } from "../search-item";
import { InfiniteData } from "@tanstack/react-query";
import { ISearchAnimeResponse } from "../../types";
import { Virtuoso } from "react-virtuoso";
import { IAnime } from "@/shared/types/anime.types";

interface ISearchList {
  pagedAnimes: InfiniteData<ISearchAnimeResponse, unknown> | undefined;
  open: boolean;
  onClose: (arg: boolean) => void;
  anchorEl: HTMLElement | null;
  isLoading: boolean;
  fetchMore: () => void;
  setAnime?: (arg: IAnime) => void;
  setOpen: (arg: boolean) => void;
}
export const SearchList: FC<ISearchList> = ({
  pagedAnimes,
  open,
  anchorEl,
  onClose,
  fetchMore,
  isLoading,
  setAnime,
  setOpen,
}) => {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      container={anchorEl}
      disableAutoFocus={true}
      disableEnforceFocus={true}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Virtuoso
        style={{ width: 350, height: 450 }}
        endReached={() => fetchMore()}
        data={pagedAnimes?.pages?.flatMap((page) => page.anime)}
        itemContent={(index, anime: IAnime) =>
          isLoading ? (
            <Typography>Загрузка</Typography>
          ) : (
            anime && (
              <Box
                key={anime.id}
                onClick={() => {
                  setAnime && setAnime(anime);
                  setOpen(false);
                }}
              >
                <SearchItem
                  setAnime={setAnime}
                  id={anime.anime_id}
                  title={anime.title}
                  rating={anime.rating}
                  photoURL={anime.material_data?.poster_url}
                />
              </Box>
            )
          )
        }
      />
    </Popover>
  );
};
