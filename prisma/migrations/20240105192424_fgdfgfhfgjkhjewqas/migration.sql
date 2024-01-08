/*
  Warnings:

  - You are about to drop the column `mintues_watched` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "mintues_watched",
ADD COLUMN     "minutes_watched" INTEGER NOT NULL DEFAULT 0;
