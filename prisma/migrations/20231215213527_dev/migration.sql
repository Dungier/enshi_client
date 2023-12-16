-- CreateTable
CREATE TABLE "Anime" (
    "anime_id" SERIAL NOT NULL,
    "id" VARCHAR(255),
    "type" VARCHAR(255),
    "link" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
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
    "material_data" JSONB,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("anime_id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "seasonId" INTEGER,
    "link" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favourite" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavouriteAnime" (
    "viewedId" INTEGER NOT NULL,
    "animeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "FavouriteAnime_pkey" PRIMARY KEY ("viewedId","animeId")
);

-- CreateTable
CREATE TABLE "home-slider" (
    "id" SERIAL NOT NULL,
    "image_url" VARCHAR(255),
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "anime_id" INTEGER NOT NULL,

    CONSTRAINT "home-slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "animeId" INTEGER,
    "link" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viewed" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Viewed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "login" VARCHAR(255) NOT NULL,
    "avatar_url" VARCHAR(255),
    "mintues_watched" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE INDEX "anime_id_index" ON "Anime"("id");

-- CreateIndex
CREATE INDEX "anime_title_index" ON "Anime"("title");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE INDEX "user_login_index" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_id_fkey" FOREIGN KEY ("id") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteAnime" ADD CONSTRAINT "FavouriteAnime_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteAnime" ADD CONSTRAINT "FavouriteAnime_viewedId_fkey" FOREIGN KEY ("viewedId") REFERENCES "Viewed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("anime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viewed" ADD CONSTRAINT "Viewed_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
