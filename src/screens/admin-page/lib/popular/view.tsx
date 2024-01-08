"use client";

import { AdminSlider } from "@/entites/admin-slider";
import { AddAnime } from "@/features/add-anime";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Popular = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRendered(true), 1000);
  }, []);

  return (
    isRendered && (
      <>
        <Typography variant={"h1"}>Популярное</Typography>
        <AdminSlider type={"admin-get-popular"} />
        <AddAnime type={"admin-get-popular"} />
      </>
    )
  );
};
