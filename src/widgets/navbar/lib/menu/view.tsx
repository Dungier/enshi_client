"use client";
import { Box, Button, List, ListItem, Popover } from "@mui/material";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import { navList } from "./model";
import Link from "next/link";
import { IUser } from "@/shared/types/user.type";

export const Menu: FC = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <span />
        <span />
        <span />
      </Button>
      <Popover open={open} onClose={() => setOpen(false)}>
        <List>
          {navList(data?.user as IUser).map((item, index) => (
            <Link key={index} href={item.link}>
              <ListItem>{item.label}</ListItem>
            </Link>
          ))}
        </List>
      </Popover>
    </>
  );
};
