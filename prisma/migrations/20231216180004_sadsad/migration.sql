/*
  Warnings:

  - Added the required column `season` to the `HomeSlider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HomeSlider" ADD COLUMN     "season" INTEGER NOT NULL;
