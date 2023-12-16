import { IAnimeSlider } from "@/shared/types/slider.types";
import Image from "next/image";
import { FC } from "react";

export const HomeSlider: FC<{ sliders: IAnimeSlider[] }> = ({ sliders }) => {
  return (
    <div style={{ position: "relative" }}>
      {sliders.map((slider) => (
        <div key={slider.anime_id}>
          <Image src={slider.image_url || ""} alt={slider.title || ""} fill />
          {slider.title}
        </div>
      ))}
    </div>
  );
};
