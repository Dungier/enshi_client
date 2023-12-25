"use client";

import { FC, useCallback, useState } from "react";
import { getYears } from "@/shared/hooks/get-years";
import { getAnimeStatusList } from "@/shared/hooks/get-anime-status-list";
import { useQuery } from "@tanstack/react-query";
import { getGenreFilters } from "./model";
import { FilterButton } from "./lib/filter-button";
import { FilterPopover } from "@/features/anime-filter/lib/filter-popover/view";
import React from "react";
import { FilterType, IAnimeFilterType } from "@/features/anime-filter/types";

export const AnimeFilter: FC = () => {
  const yearFilters = getYears();
  const statusFilters = getAnimeStatusList();
  const { data: genres, isLoading } = useQuery({
    queryKey: ["get-genres"],
    queryFn: async () => await getGenreFilters(),
  });
  const [open, setOpen] = useState<boolean>(false);

  const [type, setType] = useState<IAnimeFilterType>("genre");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, type: IAnimeFilterType) => {
      setType(type);
      setAnchorEl(event.currentTarget);
      setOpen(true);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
  }, []);

  if (!isLoading && !genres) return null;

  const filters = {
    years: yearFilters as FilterType[],
    statuses: statusFilters as FilterType[],
    genres: genres as FilterType[],
  };

  return (
    <div>
      <FilterButton label={"Жанр"} onClick={handleOpen} type={"genre"} />
      <FilterButton label={"Год"} onClick={handleOpen} type={"year"} />
      <FilterButton label={"Статус"} onClick={handleOpen} type={"status"} />
      <FilterPopover
        filters={filters}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        type={type}
      />
    </div>
  );
};
