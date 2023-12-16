import { Button, Dialog, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { IAddAnimeModalProps } from "../../types";
import AddAnimeService from "../../model";
import { SearchAnime } from "@/features/search-anime";
import { IAnime } from "@/shared/types/anime.types";
import { useQueryClient } from "@tanstack/react-query";

export const AddAnimeModal: FC<IAddAnimeModalProps> = ({
  open,
  onClose,
  type,
}) => {
  const [anime, setAnime] = useState<IAnime>();
  const queryClient = useQueryClient();

  const onSubmit = async () => {
    if (anime) {
      if (type === "admin-get-popular") {
        await AddAnimeService.addPopular({ anime_id: anime.anime_id });
      } else {
        await AddAnimeService.addTop({ anime_id: anime.anime_id });
      }
      queryClient.refetchQueries({ queryKey: [type] });
      onClose(false);
    }
  };
  const handleSetAnime = useCallback(
    (anime: IAnime) => {
      setAnime(anime);
    },
    [anime]
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <SearchAnime setAnime={handleSetAnime} />
      {anime && <Typography>Выбранное аниме {anime.title}</Typography>}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => onSubmit()}
      >
        Submit
      </Button>
    </Dialog>
  );
};
