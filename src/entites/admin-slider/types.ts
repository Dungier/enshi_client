import { AdminSectionRefetch } from "@/shared/types/admin.types";

export interface IAdminSlider {
  type: AdminSectionRefetch;
}

export interface IChangeOrder {
  type: "popular" | "top" | "slider";
  updateList: {
    anime_id?: number;
    slider_id?: number;
    order: number;
  }[];
}
