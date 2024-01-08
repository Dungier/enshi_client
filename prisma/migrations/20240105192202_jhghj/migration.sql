-- CreateTable
CREATE TABLE "Anime" (
    "anime_id" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255),
    "link" VARCHAR(255),
    "title" VARCHAR(255),
    "title_orig" VARCHAR(255),
    "other_title" VARCHAR(255),
    "translation" JSONB,
    "year" INTEGER,
    "last_season" INTEGER,
    "last_episode" INTEGER,
    "episodes_count" INTEGER,
    "kinopoisk_id" VARCHAR(255),
    "imdb_id" VARCHAR(255),
    "worldart_link" VARCHAR(255),
    "shikimori_id" VARCHAR(255),
    "quality" VARCHAR(255),
    "camrip" BOOLEAN,
    "lgbt" BOOLEAN,
    "blocked_countries" VARCHAR(255)[],
    "blocked_seasons" JSONB,
    "seasons" JSONB,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "rating" DOUBLE PRECISION,
    "top" BOOLEAN DEFAULT false,
    "top_order" INTEGER DEFAULT -1,
    "popular" BOOLEAN DEFAULT false,
    "popular_order" INTEGER DEFAULT -1,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("anime_id")
);

-- CreateTable
CREATE TABLE "Favourite" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavouriteAnime" (
    "id" SERIAL NOT NULL,
    "favourite_id" INTEGER,
    "anime_Id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "FavouriteAnime_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "HomeSlider" (
    "id" SERIAL NOT NULL,
    "image_url" VARCHAR(255),
    "season" INTEGER,
    "rating" INTEGER,
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "order" INTEGER,
    "anime_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "HomeSlider_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "login" VARCHAR(255),
    "avatar_url" VARCHAR(255),
    "mintues_watched" INTEGER NOT NULL DEFAULT 0,
    "admin" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viewed" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Viewed_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "_AnimeToGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "anime_id_index" ON "Anime"("id");

-- CreateIndex
CREATE INDEX "anime_other_index" ON "Anime"("other_title");

-- CreateIndex
CREATE INDEX "anime_title_index" ON "Anime"("title");

-- CreateIndex
CREATE INDEX "anime_year_index" ON "Anime"("year");

-- CreateIndex
CREATE INDEX "genre-title-index" ON "Genre"("title");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialData_anime_id_key" ON "MaterialData"("anime_id");

-- CreateIndex
CREATE INDEX "material_data_genres_index" ON "MaterialData"("all_genres");

-- CreateIndex
CREATE INDEX "material_data_status_index" ON "MaterialData"("anime_status");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE INDEX "user_email_index" ON "User"("email");

-- CreateIndex
CREATE INDEX "user_login_index" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToGenre_AB_unique" ON "_AnimeToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToGenre_B_index" ON "_AnimeToGenre"("B");

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteAnime" ADD CONSTRAINT "FavouriteAnime_anime_Id_fkey" FOREIGN KEY ("anime_Id") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteAnime" ADD CONSTRAINT "FavouriteAnime_favourite_id_fkey" FOREIGN KEY ("favourite_id") REFERENCES "Favourite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialData" ADD CONSTRAINT "MaterialData_anime_id_fkey" FOREIGN KEY ("anime_id") REFERENCES "Anime"("anime_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viewed" ADD CONSTRAINT "Viewed_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewedAnime" ADD CONSTRAINT "ViewedAnime_anime_Id_fkey" FOREIGN KEY ("anime_Id") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewedAnime" ADD CONSTRAINT "ViewedAnime_viewed_id_fkey" FOREIGN KEY ("viewed_id") REFERENCES "Viewed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToGenre" ADD CONSTRAINT "_AnimeToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToGenre" ADD CONSTRAINT "_AnimeToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
