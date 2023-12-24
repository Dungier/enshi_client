import { IAnimeFilter } from "../../types";

export interface FilterPopoverProps {
  filters: IAnimeFilter;
  setFilters: (arg: IAnimeFilter) => void;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: (arg: boolean) => void;
  type: "genre" | "year" | "status";
}
