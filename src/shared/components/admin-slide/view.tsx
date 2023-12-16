import { Box, Button, Typography } from "@mui/material";
import { FC, memo } from "react";
import DeleteAnimeService from "./model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IAdminSlider, IDeleteSlide } from "./types";

export const AdminSlide: FC<IAdminSlider> = memo(
  ({ slide, provided, type }) => {
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation({
      mutationKey: ["delete-slide"],
      mutationFn: async (data: IDeleteSlide) => {
        if (type === "admin-get-sliders") {
          await DeleteAnimeService.deleteSlide(data);
        } else if (type === "admin-get-popular") {
          await DeleteAnimeService.deletePopular(data);
        } else {
          await DeleteAnimeService.deleteTop(data);
        }

        queryClient.refetchQueries({ queryKey: [type] });
      },
    });
    return (
      <Box
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={{ ...provided.draggableProps.style }}
      >
        <Button
          onClick={async () =>
            mutateAsync({
              slider_id: slide.anime_id ? slide.anime_id : slide.id,
            })
          }
        >
          Удалить
        </Button>
        <Typography>{slide.title}</Typography>
      </Box>
    );
  }
);
