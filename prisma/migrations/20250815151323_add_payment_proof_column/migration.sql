/*
  Warnings:

  - Added the required column `basePrice` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Booking" ADD COLUMN     "paymentProof" TEXT;

-- AlterTable
ALTER TABLE "public"."Room" ADD COLUMN     "basePrice" DOUBLE PRECISION NOT NULL;
