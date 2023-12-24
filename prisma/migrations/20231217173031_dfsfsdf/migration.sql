/*
  Warnings:

  - Made the column `blocked` on table `Anime` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `Favourite` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `Viewed` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Anime" ALTER COLUMN "blocked" SET NOT NULL,
ALTER COLUMN "blocked" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Favourite" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Viewed" ALTER COLUMN "user_id" SET NOT NULL;
