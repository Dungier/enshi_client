import { IAnime } from "@/shared/types/anime.types";

export interface IAnimeList {
  anime: IAnime[];
  count: number;
  type: "new" | "high-rated" | "top" | "catalog";
}

export interface IPagination {
  page: number;
}
