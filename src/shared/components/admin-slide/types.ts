import { AdminSectionRefetch } from "@/shared/types/admin.types";
import { IAnime } from "@/shared/types/anime.types";
import { IAnimeSlider } from "@/shared/types/slider.types";
import { DraggableProvided } from "react-beautiful-dnd";

export interface IDeleteSlide {
  slider_id: number | undefined;
}

export interface IDeleteAnime {
  id: number;
}

export interface IAdminSlider {
  slide: IAnimeSlider | IAnime;
  provided: DraggableProvided;
  type: AdminSectionRefetch;
}
