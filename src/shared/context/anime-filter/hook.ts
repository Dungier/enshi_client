"use client";

import { useContext } from "react";
import { AnimeFilterContext } from "./context";

export const useAnimeFilters = () => {
  const context = useContext(AnimeFilterContext);
  if (!context) {
    throw new Error(
      "useAnimeFilters must be used within a AnimeFilterProvider",
    );
  }

  return context;
};
