import { ListItem, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IAnime } from "@/shared/types/anime.types";
import { StyledContainer, StyledImage } from "./styles";
import Ic_Star from "@/assets/icons/ic_star.svg";

interface ISearchItem {
  photoURL: string;
  title: string;
  rating: number;
  id: number;
  setAnime?: (arg: IAnime) => void;
}

export const SearchItem: FC<ISearchItem> = ({
  photoURL,
  title,
  rating,
  id,
  setAnime,
}) => {
  const WrapperEl = setAnime ? ListItem : Link;
  return (
    <WrapperEl href={`/anime/${id}`} style={{ textDecoration: "none" }}>
      <StyledContainer>
        <StyledImage src={photoURL} alt={title} width={50} height={50} />
        <div>
          <Typography variant="subtitle1">{title.slice(0, 30)}</Typography>
          <Typography variant="subtitle2">
            <Image src={Ic_Star} alt={"Рейтинг"} width={12} height={12} />{" "}
            {rating}
          </Typography>
        </div>
      </StyledContainer>
    </WrapperEl>
  );
};
