import { UploadPhoto } from "@/shared/components/upload-photo";
import { IUploadPhotoResponse } from "@/shared/components/upload-photo/types";
import { Button, Dialog, TextField, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateSlide } from "../../types";
import AddSliderService from "../../model";
import { SelectedImage } from "@/shared/components/selected-image";
import { SearchAnime } from "@/features/search-anime";
import { IAnime } from "@/shared/types/anime.types";
import { useQueryClient } from "@tanstack/react-query";

interface AddSliderModalProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

export const AddSliderModal: FC<AddSliderModalProps> = ({ open, onClose }) => {
  const { register, handleSubmit } = useForm<ICreateSlide>();
  const [file, setFile] = useState<File | null>(null);
  const [responseData, setResponseData] = useState<IUploadPhotoResponse[]>([]);
  const [anime, setAnime] = useState<IAnime>();
  const queryClient = useQueryClient();
  const onSubmit: SubmitHandler<ICreateSlide> = async (data) => {
    anime &&
      (await AddSliderService.addSlide({
        ...data,
        image_url: responseData[0].url,
        anime_id: anime.anime_id,
        season: Number(data.season),
        rating: Number(data.rating),
      }));
    queryClient.refetchQueries({ queryKey: ["admin-get-sliders"] });
    onClose(false);
  };
  const handleSetAnime = useCallback(
    (anime: IAnime) => {
      setAnime(anime);
    },
    [anime]
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchAnime setAnime={handleSetAnime} />
        {anime && <Typography>Выбранное аниме {anime.title}</Typography>}
        <TextField
          {...register("title")}
          label="Название"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          {...register("description")}
          label="Описание"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          {...register("season")}
          label="Сезон"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          {...register("rating")}
          label="Рейтинг"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <UploadPhoto setFile={setFile} setResponseData={setResponseData} />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {file && <SelectedImage file={file} />}
    </Dialog>
  );
};
