import { IAnimeSlider } from "@/shared/types/slider.types";
import Image from "next/image";
import { FC } from "react";

export const HomeSlider: FC<{ sliders: IAnimeSlider[] }> = ({ sliders }) => {
  return (
    <div style={{ position: "relative" }}>
      {sliders.map((slider) => (
        <div
          key={slider.anime_id}
          style={{ display: "inline-block", position: "relative" }}
        >
          <Image
            src={slider.image_url || ""}
            alt={slider.title || ""}
            height={1000}
            width={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
          {slider.title}
        </div>
      ))}
    </div>
  );
};
