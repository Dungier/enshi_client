export type FilterType = {
  id: number | string;
  title: string;
};

export interface IAnimeFilters {
  genres: FilterType[];
  years: FilterType[];
  statuses: FilterType[];
}

export type IAnimeFilterType = "genre" | "year" | "status";
