"use client";
import { FC } from "react";
import { FavouriteButtonProps } from "./types";
import { useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addToFavourite, isAnimeFavourite, removeFromFavourite } from "./model";
import Link from "next/link";

export const FavouriteButton: FC<FavouriteButtonProps> = ({ anime_id }) => {
  const { data } = useSession();

  const user = data?.user as { id: number };

  const {
    data: isFavourite,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["is-anime-favourite"],
    queryFn: async () =>
      await isAnimeFavourite({
        anime_id,
        user_id: user?.id,
      }),
    enabled: !!user,
  });

  const handleAddToFavourite = async () => {
    await addToFavourite({
      anime_id,
      user_id: user?.id,
    });

    refetch();
  };
  const handleRemoveFromFavourite = async () => {
    await removeFromFavourite({
      anime_id,
      user_id: user?.id,
    });

    refetch();
  };
  const { mutateAsync: add } = useMutation({
    mutationKey: ["add-to-favourite"],
    mutationFn: async () => handleAddToFavourite(),
  });

  const { mutateAsync: remove } = useMutation({
    mutationKey: ["remove-from-favourite"],
    mutationFn: async () => handleRemoveFromFavourite(),
  });

  if (!data)
    return (
      <Link href="/login">
        <Button>Войти</Button>
      </Link>
    );

  if (isLoading) return <Button></Button>;

  if (!isLoading && isFavourite)
    return <Button onClick={async () => await remove()}>В Избранном</Button>;

  if (!isLoading && !isFavourite)
    return (
      <Button onClick={async () => await add()}>Добавить в избранное</Button>
    );
};
