"use client";

import { FC, useEffect } from "react";
import { IAnimePlayer } from "./types";
import { useSession } from "next-auth/react";

export const AnimePlayer: FC<IAnimePlayer> = ({ anime }) => {
  const { data } = useSession();
  const user = data?.user;

  const handleIframeMessage = (event: any) => {
    if (event.data.key == "kodik_player_current_episode") {
      if (user && event.data.value.episode === anime.last_episode) {
      }
    }
  };

  useEffect(() => {
    window.addEventListener("message", handleIframeMessage);
    return () => window.removeEventListener("message", handleIframeMessage);
  }, []);
  return (
    <iframe
      allowFullScreen
      allow={"fullscreen; autoplay"}
      src={`https:${anime.link}`}
    />
  );
};
