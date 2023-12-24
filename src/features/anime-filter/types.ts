export type FilterType = {
  id: string;
  title: string;
};

export interface AnimeFilterProps {
  setYearFilters: (arg: FilterType[]) => void;
  setStatusFilters: (arg: FilterType[]) => void;
  setGenreFilters: (arg: FilterType[]) => void;
}
