import { FC } from "react";
import { AnimeFilterProps } from "./types";
import { getYears } from "@/shared/hooks/get-years";
import { getAnimeStatusList } from "@/shared/hooks/get-anime-status-list";
import { useQuery } from "@tanstack/react-query";
import { getGenreFilters } from "./model";
import { FilterButton } from "./lib/filter-button";

export const AnimeFilter: FC<AnimeFilterProps> = ({  }) => {
  const yearFilters = getYears();
  const statusFilters = getAnimeStatusList();
  const { data: genres, isLoading } = useQuery({
    queryKey: ["get-genres"],
    queryFn: async () => await getGenreFilters(),
  });
  if (!isLoading && !genres) return null;

  const filters = {
    years: yearFilters,
    status: statusFilters,
    genres: genres as {
      id: number;
      title: string;
    }[],
  };

  return (
    <div>
      <FilterButton
        type="genre"
        label={"Жанр"}
        filters={filters}
      />
      <FilterButton
        type="year"
        label={"Год"}
        filters={filters}
      />
      <FilterButton
        type="status"
        label={"Статус"}
        filters={filters}
      />
    </div>
  );
};
