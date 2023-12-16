-- AlterTable
ALTER TABLE "Anime" ADD COLUMN     "top_order" INTEGER NOT NULL DEFAULT -1,
ALTER COLUMN "popular_order" SET DEFAULT -1;
