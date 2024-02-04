import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";
import Image from "next/image";
import {
  AnimeCard,
  AnimeCardText,
  AnimeYearGenreContainer,
  StarIconContainer,
} from "@/shared/components/anime/styles";
import Link from "next/link";
import starIcon from "@/assets/icons/ic_star2.svg";
function numberToHexColor(num: number): string {
  const startColor = [242, 103, 44]; // #F2672C при значение 0 ебанул
  const endColor = [28, 186, 110]; // #1CBA6E при значение 10 ебанул

  const r = Math.round(
    startColor[0] + (endColor[0] - startColor[0]) * (num / 10),
  )
    .toString(16)
    .padStart(2, "0");
  const g = Math.round(
    startColor[1] + (endColor[1] - startColor[1]) * (num / 10),
  )
    .toString(16)
    .padStart(2, "0");
  const b = Math.round(
    startColor[2] + (endColor[2] - startColor[2]) * (num / 10),
  )
    .toString(16)
    .padStart(2, "0");

  return `#${r}${g}${b}`;
}
export const Anime: FC<{ anime: IAnime }> = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.anime_id}`}>
      <AnimeCard>
        <div style={{ position: "relative" }}>
          <Image
            src={anime.material_data.poster_url}
            alt={anime.title}
            width={196}
            height={280}
            style={{ borderRadius: "1rem" }}
          />
          <StarIconContainer
            style={{ background: `${numberToHexColor(anime.rating)}` }}
          >
            <Image src={starIcon} alt={"starIcon"} height={14} width={14} />
            {anime.rating}
          </StarIconContainer>
        </div>
        <AnimeCardText>{anime.title}</AnimeCardText>
        <AnimeYearGenreContainer>
          <div style={{ width: "50%" }}>{anime.year}</div>
          <div style={{ width: "50%" }}>2</div>
        </AnimeYearGenreContainer>
      </AnimeCard>
    </Link>
  );
};
