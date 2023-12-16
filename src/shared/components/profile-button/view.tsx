"use client";

import { IUser } from "@/shared/types/user.type";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Ic_Avatar_Placeholder from "@/assets/icons/ic_avatar_placeholder.svg";
import { useSession } from "next-auth/react";

export const ProfileButton = () => {
  const session = useSession();

  if (session && session.data) {
    const { data: nextAuthuser } = session;
    const user = nextAuthuser.user as IUser;
    return (
      <Link href={`/profile/${user.id}`}>
        <Button>
          <Image
            alt="Аватар"
            src={user.avatar_url ? user.avatar_url : Ic_Avatar_Placeholder}
          />
          <Typography variant="subtitle2">{user.login}</Typography>
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href="/login">
        <Button>
          <Image src={Ic_Avatar_Placeholder} alt="Аватар" />
          <Typography variant="subtitle2">Войти</Typography>
        </Button>
      </Link>
    );
  }
};
