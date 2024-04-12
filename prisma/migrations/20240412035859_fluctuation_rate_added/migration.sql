/*
  Warnings:

  - Added the required column `fluctuationRate` to the `Currency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Currency" ADD COLUMN     "fluctuationRate" DOUBLE PRECISION NOT NULL;
