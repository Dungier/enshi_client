import { IAnime } from "@/shared/types/anime.types";

export interface ISearchAnime {
  name: string;
  page: number;
  limit: number;
}

export interface ISearchAnimeResponse {
  anime: IAnime[];
  totalPages: number;
  page: number;
}
