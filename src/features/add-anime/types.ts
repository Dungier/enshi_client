import { AdminSectionRefetch } from "@/shared/types/admin.types";

export interface IAddAnime {
  anime_id: number;
}

export interface AddAnimeProps {
  type: AdminSectionRefetch;
}
export interface IAddAnimeModalProps {
  open: boolean;
  onClose: (arg: boolean) => void;
  type: AdminSectionRefetch;
}
