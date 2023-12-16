/*
  Warnings:

  - Added the required column `order` to the `HomeSlider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HomeSlider" ADD COLUMN     "order" INTEGER NOT NULL;
