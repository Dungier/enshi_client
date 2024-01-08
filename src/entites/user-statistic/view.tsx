"use client";
import { FC } from "react";
import { UserStatisticProps } from "./types";
import { Box, Typography } from "@mui/material";
import { getUserStatistic } from "./model";
import { useQuery } from "@tanstack/react-query";

export const UserStatistic: FC<UserStatisticProps> = ({ user_id }) => {
  const { data: statistic, isLoading } = useQuery({
    queryKey: ["get-user-statistic"],
    queryFn: async () => await getUserStatistic(user_id),
  });

  if (isLoading) return null;

  return (
    <Box>
      <Box>
        <Typography>Просмотрено {statistic?.watched_animes}</Typography>
        <Typography>В избранном {statistic?.favourite_anime}</Typography>
      </Box>
      <Box>
        <Typography>Аниме {statistic?.watched_animes}</Typography>
        <Typography>Эпизодов {statistic?.all_watched_episodes}</Typography>
        <Typography>Часов {statistic?.watch_time}</Typography>
      </Box>
    </Box>
  );
};
