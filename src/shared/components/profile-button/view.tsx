"use client";

import { IUser } from "@/shared/types/user.type";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Ic_Avatar_Placeholder from "@/assets/icons/ic_avatar_placeholder.svg";
import { useSession } from "next-auth/react";
import { StyledButton, StyledImage } from "./styles";

export const ProfileButton = () => {
  const session = useSession();

  if (session && session.data) {
    const { data: nextAuthuser } = session;
    const user = nextAuthuser.user as IUser;

    return (
      <Link href={`/profile`}>
        <StyledButton>
          <StyledImage
            alt="Аватар"
            src={user.avatar_url ? user.avatar_url : Ic_Avatar_Placeholder}
            width={40}
            height={40}
          />
          <Typography
            sx={{
              pl: 2,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {user.login.slice(0, 12)}
          </Typography>
        </StyledButton>
      </Link>
    );
  } else {
    return (
      <Link href="/login">
        <StyledButton>
          <Image src={Ic_Avatar_Placeholder} alt="Аватар" />
          <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Войти</Typography>
        </StyledButton>
      </Link>
    );
  }
};
