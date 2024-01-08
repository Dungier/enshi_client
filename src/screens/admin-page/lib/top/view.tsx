"use client";

import { AdminSlider } from "@/entites/admin-slider";
import { AddAnime } from "@/features/add-anime";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Top = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRendered(true), 1000);
  }, []);
    
  return (
    isRendered && (
      <>
        <Typography variant={"h1"}>ТОП 100</Typography>
        <AdminSlider type={"admin-get-top"} />
        <AddAnime type={"admin-get-top"} />
      </>
    )
  );
};
