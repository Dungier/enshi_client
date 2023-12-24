/*
  Warnings:

  - You are about to drop the column `material_data` on the `Anime` table. All the data in the column will be lost.
  - The primary key for the `FavouriteAnime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `animeId` on the `FavouriteAnime` table. All the data in the column will be lost.
  - You are about to drop the column `viewedId` on the `FavouriteAnime` table. All the data in the column will be lost.
  - You are about to drop the `Episode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Season` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `id` on table `Anime` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_id_fkey";

-- DropForeignKey
ALTER TABLE "FavouriteAnime" DROP CONSTRAINT "FavouriteAnime_animeId_fkey";

-- DropForeignKey
ALTER TABLE "FavouriteAnime" DROP CONSTRAINT "FavouriteAnime_viewedId_fkey";

-- DropForeignKey
ALTER TABLE "Season" DROP CONSTRAINT "Season_animeId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Viewed" DROP CONSTRAINT "Viewed_user_id_fkey";

-- AlterTable
ALTER TABLE "Anime" DROP COLUMN "material_data",
ADD COLUMN     "seasons" JSONB,
ALTER COLUMN "id" SET NOT NULL,
ALTER COLUMN "link" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "blocked" DROP NOT NULL,
ALTER COLUMN "blocked" DROP DEFAULT,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "rating" DROP DEFAULT,
ALTER COLUMN "popular" DROP NOT NULL,
ALTER COLUMN "popular_order" DROP NOT NULL,
ALTER COLUMN "top" DROP NOT NULL,
ALTER COLUMN "top_order" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FavouriteAnime" DROP CONSTRAINT "FavouriteAnime_pkey",
DROP COLUMN "animeId",
DROP COLUMN "viewedId",
ADD COLUMN     "anime_Id" INTEGER,
ADD COLUMN     "favourite_id" INTEGER,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FavouriteAnime_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HomeSlider" ALTER COLUMN "order" DROP NOT NULL,
ALTER COLUMN "season" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "login" DROP NOT NULL,
ALTER COLUMN "admin" DROP NOT NULL;

-- DropTable
DROP TABLE "Episode";

-- DropTable
DROP TABLE "Season";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "count" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenreAnime" (
    "id" SERIAL NOT NULL,
    "genre_id" INTEGER,
    "anime_id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "GenreAnime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialData" (
    "id" SERIAL NOT NULL,
    "anime_id" INTEGER NOT NULL,
    "title" VARCHAR(255),
    "anime_title" VARCHAR(255),
    "title_en" VARCHAR(255),
    "other_titles" VARCHAR(255)[],
    "other_titles_en" VARCHAR(255)[],
    "other_titles_jp" VARCHAR(255)[],
    "anime_kind" VARCHAR(255),
    "all_status" VARCHAR(255),
    "anime_status" VARCHAR(255),
    "year" INTEGER,
    "description" TEXT,
    "poster_url" VARCHAR(255),
    "screenshots" VARCHAR(255)[],
    "duration" INTEGER,
    "countries" VARCHAR(255)[],
    "all_genres" VARCHAR(255)[],
    "genres" VARCHAR(255)[],
    "anime_genres" VARCHAR(255)[],
    "anime_studios" VARCHAR(255)[],
    "kinopoisk_rating" DOUBLE PRECISION,
    "kinopoisk_votes" INTEGER,
    "imdb_rating" DOUBLE PRECISION,
    "imdb_votes" INTEGER,
    "shikimori_rating" DOUBLE PRECISION,
    "shikimori_votes" INTEGER,
    "premiere_world" VARCHAR(255),
    "aired_at" TIMESTAMPTZ(6),
    "next_episode_at" TIMESTAMPTZ(6),
    "rating_mpaa" VARCHAR(255),
    "episodes_total" INTEGER,
    "episodes_aired" INTEGER,
    "actors" VARCHAR(255)[],
    "directors" VARCHAR(255)[],
    "producers" VARCHAR(255)[],
    "writers" VARCHAR(255)[],
    "composers" VARCHAR(255)[],
    "editors" VARCHAR(255)[],
    "designers" VARCHAR(255)[],
    "operators" VARCHAR(255)[],
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "MaterialData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViewedAnime" (
    "id" SERIAL NOT NULL,
    "viewed_id" INTEGER,
    "anime_Id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "ViewedAnime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "genre-title-index" ON "Genre"("title");

-- CreateIndex
CREATE UNIQUE INDEX "GenreAnime_genre_id_anime_id_key" ON "GenreAnime"("genre_id", "anime_id");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialData_anime_id_key" ON "MaterialData"("anime_id");

-- CreateIndex
CREATE INDEX "material_data_genres_index" ON "MaterialData"("all_genres");

-- CreateIndex
CREATE INDEX "material_data_status_index" ON "MaterialData"("anime_status");

-- CreateIndex
CREATE INDEX "anime_other_index" ON "Anime"("other_title");

-- CreateIndex
CREATE INDEX "anime_year_index" ON "Anime"("year");

-- CreateIndex
CREATE INDEX "user_email_index" ON "User"("email");

-- AddForeignKey
ALTER TABLE "FavouriteAnime" ADD CONSTRAINT "FavouriteAnime_anime_Id_fkey" FOREIGN KEY ("anime_Id") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteAnime" ADD CONSTRAINT "FavouriteAnime_favourite_id_fkey" FOREIGN KEY ("favourite_id") REFERENCES "Favourite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenreAnime" ADD CONSTRAINT "GenreAnime_anime_id_fkey" FOREIGN KEY ("anime_id") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenreAnime" ADD CONSTRAINT "GenreAnime_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialData" ADD CONSTRAINT "MaterialData_anime_id_fkey" FOREIGN KEY ("anime_id") REFERENCES "Anime"("anime_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viewed" ADD CONSTRAINT "Viewed_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewedAnime" ADD CONSTRAINT "ViewedAnime_anime_Id_fkey" FOREIGN KEY ("anime_Id") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewedAnime" ADD CONSTRAINT "ViewedAnime_viewed_id_fkey" FOREIGN KEY ("viewed_id") REFERENCES "Viewed"("id") ON DELETE CASCADE ON UPDATE CASCADE;
