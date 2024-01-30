"use client";
import { List, ListItem, Popover, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import { navList } from "./model";
import Link from "next/link";
import { IUser } from "@/shared/types/user.type";
import {
  StyledMenuButton,
  StyledMenuSpan,
  StyledPopoverContainer,
} from "./styles";
import { ThemeToggler } from "@/features/theme-toggler";

export const Menu: FC = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <StyledMenuButton onClick={handleClick}>
        <StyledMenuSpan
          hidden={false}
          rotateZ={open ? 45 : 0}
          style={{ marginLeft: open ? 2 : 0 }}
        />
        <StyledMenuSpan hidden={open} rotateZ={0} />
        <StyledMenuSpan
          hidden={false}
          rotateZ={open ? -45 : 0}
          style={{ marginLeft: open ? 2 : 0, marginTop: open ? -9 : 0 }}
        />
      </StyledMenuButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledPopoverContainer>
          <List sx={{ m: 0 }}>
            {navList(data?.user as IUser).map((item, index) => (
              <Link
                key={index}
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  sx={{ m: 0, p: 0, mt: 1.5, color: "#fff", fontSize: "1rem" }}
                >
                  <Typography variant={"subtitle1"}> {item.label}</Typography>
                </ListItem>
              </Link>
            ))}
          </List>
          <ThemeToggler />
        </StyledPopoverContainer>
      </Popover>
    </>
  );
};
