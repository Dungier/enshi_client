import React from "react";
import { IAnimeFilterType } from "@/features/anime-filter/types";

export interface FilterButtonProps {
  label: string;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    type: IAnimeFilterType,
  ) => void;
  type: IAnimeFilterType;
}
