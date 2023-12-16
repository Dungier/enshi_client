import { IAnime } from "@/shared/types/anime.types";
import { IAnimeSlider } from "@/shared/types/slider.types";

export interface IHomePage {
  popular: IAnime[];
  highRatedAnime: IAnime[];
  highRatedAnimeCount: number;
  newAnime: IAnime[];
  newAnimeCount: number;
  sliders: IAnimeSlider[];
}
