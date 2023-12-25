import { IAnimeFilters, IAnimeFilterType } from "@/features/anime-filter/types";

export interface FilterPopoverProps {
  filters: IAnimeFilters;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: (arg: boolean) => void;
  type: IAnimeFilterType;
}
