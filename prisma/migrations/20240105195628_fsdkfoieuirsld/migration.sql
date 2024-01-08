/*
  Warnings:

  - Made the column `avatar_url` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "wallpaper_url" VARCHAR(255) NOT NULL DEFAULT '/uploads/wallpapers/default.jpg',
ALTER COLUMN "avatar_url" SET NOT NULL,
ALTER COLUMN "avatar_url" SET DEFAULT '/uploads/avatars/default.jpg';
