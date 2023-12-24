import { IAnimeFilter } from "../../types";

export interface FilterButtonProps {
  label: string;
  type: "genre" | "year" | "status";
  setFilters: (arg: IAnimeFilter) => void;
  filters: Fil;
}
