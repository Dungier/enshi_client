import { ListItem } from "@mui/material";
import { memo, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IAnime } from "@/shared/types/anime.types";

interface ISearchItem {
  photoURL: string;
  title: string;
  rating: number;
  id: number;
  setAnime?: (arg: IAnime) => void;
}

export const SearchItem: FC<ISearchItem> = memo(
  ({ photoURL, title, rating, id, setAnime }) => {
    const WrapperEl = setAnime ? ListItem : Link;
    return (
      <WrapperEl href={`/anime/${id}`}>
        <Image src={photoURL} alt={title} width={50} height={50} />
        <div>{title}</div>
        <div>{rating}</div>
      </WrapperEl>
    );
  }
);
