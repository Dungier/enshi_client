"use client";
import { FC } from "react";
import { FavouriteButtonProps } from "./types";
import { useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { isAnimeFavourite } from "./model";

export const FavouriteButton: FC<FavouriteButtonProps> = ({ anime_id }) => {
  const { data } = useSession();
  //   const { data: isFavourite } = useQuery({
  //     queryKey: ["is-anime-favourite"],
  //     queryFn: async () =>
  //       await isAnimeFavourite({ anime_id, user_id: data?.user.id }),
  //   });
  console.log(data);

  return <Button></Button>;
};
