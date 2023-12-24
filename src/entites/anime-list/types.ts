import { IAnimeFilter } from "@/features/anime-filter/types";
import { IAnime } from "@/shared/types/anime.types";

export interface IAnimeList {
  anime: IAnime[];
  count: number;
  type: "new" | "high-rated" | "top" | "catalog";
  filters?: IAnimeFilter;
}

export interface IPagination {
  page: number;
}
