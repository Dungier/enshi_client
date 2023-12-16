import { AdminSectionRefetch } from "@/shared/types/admin.types";
import { IAnime } from "@/shared/types/anime.types";
import { IAnimeSlider } from "@/shared/types/slider.types";
import { DraggableProvided } from "react-beautiful-dnd";

export interface IDeleteSlide {
  slider_id: string | number | null | undefined;
}

export interface IAdminSlider {
  slide: IAnimeSlider | IAnime;
  provided: DraggableProvided;
  type: AdminSectionRefetch;
}
