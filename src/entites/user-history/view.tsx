"use client";
import { FC, useMemo } from "react";
import { UserHistoryProps } from "./types";
import { Box } from "@mui/material";
import { useUserHistoryMode } from "@/shared/context/history-mode";
import { getFavourite, getViewed } from "./model";
import { useQuery } from "@tanstack/react-query";
import { TypeSwitcher } from "./lib/type-switcher";
import { AnimesToDisplay } from "./lib/animes-to-display/view";

export const UserHistory: FC<UserHistoryProps> = ({ user_id }) => {
  const { mode } = useUserHistoryMode();
  const functionMapping = {
    viewed: getViewed,
    favourite: getFavourite,
  };

  const queryFn = functionMapping[mode];

  const { data, isLoading } = useQuery({
    queryKey: ["get-user-history", mode],
    queryFn: async () => queryFn(user_id),
  });

  return (
    <Box>
      <TypeSwitcher />
      <AnimesToDisplay animes={data} isLoading={isLoading} />
    </Box>
  );
};
