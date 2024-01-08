import { Box, Button, Typography } from "@mui/material";
import { FC, memo } from "react";
import { deleteSlide, deletePopular, deleteTop } from "./model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IAdminSlider, IDeleteAnime, IDeleteSlide } from "./types";

export const AdminSlide: FC<IAdminSlider> = memo(
  ({ slide, provided, type }) => {
    const functionMapping = {
      "admin-get-sliders": deleteSlide,
      "admin-get-popular": deletePopular,
      "admin-get-top": deleteTop,
    };
    const mutationFn = functionMapping[type];
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation({
      mutationKey: ["delete-slide"],
      mutationFn: async (data: IDeleteSlide & IDeleteAnime) => {
        await mutationFn(data);
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
              slider_id: slide.anime_id,
              id: Number(slide.id),
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
