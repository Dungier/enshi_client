import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";

export const AnimePage: FC<{ anime: Omit<IAnime, "seasons"> }> = ({
  anime,
}) => {
  return <></>;
};
