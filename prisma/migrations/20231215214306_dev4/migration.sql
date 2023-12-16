/*
  Warnings:

  - You are about to drop the `home-slider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "home-slider";

-- CreateTable
CREATE TABLE "HomeSlider" (
    "id" SERIAL NOT NULL,
    "image_url" VARCHAR(255),
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "anime_id" INTEGER NOT NULL,

    CONSTRAINT "HomeSlider_pkey" PRIMARY KEY ("id")
);
