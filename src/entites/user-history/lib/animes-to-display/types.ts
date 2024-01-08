import { IAnime } from "@/shared/types/anime.types";

export interface AnimesToDisplayProps {
  animes: IAnime[] | undefined;
  isLoading: boolean;
}
