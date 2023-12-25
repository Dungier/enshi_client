"use client";

import { createContext } from "react";
import { FilterType } from "@/features/anime-filter/types";

export interface AnimeFilterContextType {
  genres: FilterType[];
  setGenres: (arg: FilterType[]) => void;
  years: FilterType[];
  setYears: (arg: FilterType[]) => void;
  statuses: FilterType[];
  setStatuses: (arg: FilterType[]) => void;
}

export const AnimeFilterContext = createContext<
  AnimeFilterContextType | undefined
>(undefined);
