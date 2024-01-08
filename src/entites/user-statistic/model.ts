"use server";
import prisma from "@/configs/prisma.config";

export const getUserStatistic = async (user_id: number) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: user_id } });

    if (!user) throw new Error(`Пользователь с id ${user_id} не найден`);

    const viewed = await prisma.viewed.findFirst({
      where: { user_id: user_id },
    });

    if (!viewed) throw new Error(`Плохой запрос`);

    const viewedCount = await prisma.viewedAnime.count({
      where: { viewed_id: viewed.id },
    });

    const favourite = await prisma.favourite.findFirst({
      where: { user_id: user_id },
    });

    if (!favourite) throw new Error(`Плохой запрос`);

    const favouriteCount = await prisma.favouriteAnime.count({
      where: { favourite_id: favourite.id },
    });

    const allViewedAnimes = await prisma.viewedAnime.findMany({
      where: { viewed_id: viewed.id },
      include: { anime: { select: { episodes_count: true } } },
    });

    const allViewedEpisodes = allViewedAnimes.reduce(
      (acc, item) => (acc += Number(item?.anime?.episodes_count || 0)),
      0
    );

    return {
      watch_time: Math.floor(user?.minutes_watched / 60),
      watched_animes: viewedCount,
      all_watched_episodes: allViewedEpisodes,
      favourite_anime: favouriteCount,
    };
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
