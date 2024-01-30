"use client";
import { FC } from "react";
import { UserCardProps } from "./types";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { UserStatus } from "@/shared/components/user-status";
import { LogoutButton } from "@/shared/components/logout-button";
import { Settings } from "@/shared/components/settings-button";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Box>
      <Image src={user.avatar_url} alt={user.login} width={100} height={100} />
      <Typography>{user.login}</Typography>
      <UserStatus user_id={user.id} />
      <Grid>
        <Grid>
          <Settings />
        </Grid>
        <Grid>
          <LogoutButton />
        </Grid>
      </Grid>
    </Box>
  );
};
