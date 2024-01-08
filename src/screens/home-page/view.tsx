"use client";
import { FC, useState } from "react";
import { IHomePage } from "./types";
import { HomeSlider } from "@/entites/home-slider";
import { AnimeList } from "@/entites/anime-list";
import { AnimeTypeSwitcher } from "@/features/anime-type-switcher";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Ic_Chevron from "@/assets/icons/ic_chevron__sm.svg";
import { AnimeRow } from "@/entites/anime-row";
import { AnimeFilterProvider } from "@/shared/context/anime-filter";

export const HomePage: FC<IHomePage> = ({
  sliders,
  highRatedAnime,
  highRatedAnimeCount,
  popular,
}) => {
  const [type, setType] = useState<"new" | "high-rated">("high-rated");
  return (
    <main className="bg-red-900 dark:bg-blue-900">
      <HomeSlider sliders={sliders} />

      <Link href={"/catalog"}>
        <Typography>
          Популярное <Image src={Ic_Chevron} alt={"Популярное"} />
        </Typography>
      </Link>
      <AnimeRow anime={popular} />
      <Link href={"/catalog"}>
        <Typography>
          Смотреть аниме <Image src={Ic_Chevron} alt={"Смотреть аниме "} />
        </Typography>
      </Link>

      <AnimeTypeSwitcher type={type} setType={setType} />
      <AnimeFilterProvider>
        <AnimeList
          anime={highRatedAnime}
          count={highRatedAnimeCount}
          type={type}
        />
      </AnimeFilterProvider>
    </main>
  );
};
