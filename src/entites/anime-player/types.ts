import { IAnime } from "@/shared/types/anime.types";

export interface IAnimePlayer {
  anime: IAnime;
}

export interface IAddScreenTime {
  user_id: number;
}

export interface IAddToViewed {
  user_id: number;
  anime_id: number;
}
