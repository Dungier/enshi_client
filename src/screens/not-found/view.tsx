"use server";
import { FC } from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Not_Found from "@/assets/images/not_found.png";
import Link from "next/link";
import { StyledContainer } from "./styles";

export const NotFoundPage: FC = () => {
  return (
    <StyledContainer>
      <Image src={Not_Found} alt={"Страница не найдена"} />
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "4.6875rem",
            letterSpacing: 6,
          }}
        >
          404
        </Typography>
        <Typography variant="subtitle1">
          Извините, но мы не смогли найти <br />
          страницу, которую вы искали
        </Typography>
        <Link href={"/"}>
          <Button sx={{ mt: 3.75, height: 40, width: 228 }}>На главную</Button>
        </Link>
      </div>
    </StyledContainer>
  );
};
