import { FC, useEffect } from "react";
import { ISelectedImage } from "./types";
import Image from "next/image";
export const SelectedImage: FC<ISelectedImage> = ({ file, styles }) => {
  const imageUrl = URL.createObjectURL(file);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: "30px",
        overflow: "hidden",
        ...styles,
      }}
    >
      <Image src={imageUrl} alt="Картинка" layout="fill" objectFit="cover" />
    </div>
  );
};
