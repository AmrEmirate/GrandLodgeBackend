/*
  Warnings:

  - The values [SUDAH_DIBAYAR] on the enum `BookingStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `amount` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `category_room` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `check_in` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `check_out` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_number` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `payment_deadline` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `property_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `booking_id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `property_id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_reply` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `bedoption` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `image_room` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `property_id` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `address_company` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `company_name` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number_company` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Booking_Rooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Property_Hotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Property_Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_Available` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_Image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[invoiceNumber]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookingId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[provider,providerId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `checkIn` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOut` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceNumber` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentDeadline` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedOption` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressCompany` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumberCompany` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."BedOption" AS ENUM ('SINGLE', 'DOUBLE', 'TWIN');

-- CreateEnum
CREATE TYPE "public"."TokenPurpose" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."BookingStatus_new" AS ENUM ('MENUNGGU_PEMBAYARAN', 'MENUNGGU_KONFIRMASI', 'DIPROSES', 'DIBATALKAN', 'SELESAI');
ALTER TABLE "public"."Booking" ALTER COLUMN "status" TYPE "public"."BookingStatus_new" USING ("status"::text::"public"."BookingStatus_new");
ALTER TYPE "public"."BookingStatus" RENAME TO "BookingStatus_old";
ALTER TYPE "public"."BookingStatus_new" RENAME TO "BookingStatus";
DROP TYPE "public"."BookingStatus_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_property_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking_Rooms" DROP CONSTRAINT "Booking_Rooms_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking_Rooms" DROP CONSTRAINT "Booking_Rooms_room_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Property_Hotel" DROP CONSTRAINT "Property_Hotel_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Property_Image" DROP CONSTRAINT "Property_Image_property_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Review" DROP CONSTRAINT "Review_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Review" DROP CONSTRAINT "Review_property_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Review" DROP CONSTRAINT "Review_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Room" DROP CONSTRAINT "Room_property_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Room_Available" DROP CONSTRAINT "Room_Available_room_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Room_Image" DROP CONSTRAINT "Room_Image_room_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Tenant" DROP CONSTRAINT "Tenant_user_id_fkey";

-- DropIndex
DROP INDEX "public"."Tenant_email_key";

-- DropIndex
DROP INDEX "public"."Tenant_user_id_key";

-- AlterTable
ALTER TABLE "public"."Booking" DROP COLUMN "amount",
DROP COLUMN "category_room",
DROP COLUMN "check_in",
DROP COLUMN "check_out",
DROP COLUMN "invoice_number",
DROP COLUMN "payment_deadline",
DROP COLUMN "property_id",
DROP COLUMN "total_price",
DROP COLUMN "user_id",
ADD COLUMN     "checkIn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkOut" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "invoiceNumber" TEXT NOT NULL,
ADD COLUMN     "paymentDeadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "propertyId" INTEGER NOT NULL,
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'MENUNGGU_PEMBAYARAN';

-- AlterTable
ALTER TABLE "public"."Review" DROP COLUMN "booking_id",
DROP COLUMN "property_id",
DROP COLUMN "tenant_reply",
DROP COLUMN "user_id",
ADD COLUMN     "bookingId" INTEGER NOT NULL,
ADD COLUMN     "propertyId" INTEGER NOT NULL,
ADD COLUMN     "tenantReply" TEXT,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Room" DROP COLUMN "bedoption",
DROP COLUMN "image_room",
DROP COLUMN "property_id",
ADD COLUMN     "bedOption" "public"."BedOption" NOT NULL,
ADD COLUMN     "category" "public"."RoomCategory" NOT NULL,
ADD COLUMN     "imageRoom" TEXT,
ADD COLUMN     "propertyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Tenant" DROP COLUMN "address_company",
DROP COLUMN "company_name",
DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "phone_number_company",
DROP COLUMN "profilePicture",
DROP COLUMN "user_id",
DROP COLUMN "verified",
ADD COLUMN     "addressCompany" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "phoneNumberCompany" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "full_name",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "provider" TEXT,
ADD COLUMN     "providerId" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Booking_Rooms";

-- DropTable
DROP TABLE "public"."Property_Hotel";

-- DropTable
DROP TABLE "public"."Property_Image";

-- DropTable
DROP TABLE "public"."Room_Available";

-- DropTable
DROP TABLE "public"."Room_Image";

-- DropEnum
DROP TYPE "public"."BEDOPTION";

-- DropEnum
DROP TYPE "public"."PropertyCategory";

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Property" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "provinsi" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "mainImage" TEXT,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PropertyImage" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "PropertyImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RoomImage" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "RoomImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RoomAvailability" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "date" DATE NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoomAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookingRoom" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "pricePerNight" DOUBLE PRECISION NOT NULL,
    "numberOfNights" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "purpose" "public"."TokenPurpose" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RoomAvailability_roomId_date_key" ON "public"."RoomAvailability"("roomId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "public"."Token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_invoiceNumber_key" ON "public"."Booking"("invoiceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Review_bookingId_key" ON "public"."Review"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_userId_key" ON "public"."Tenant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_provider_providerId_key" ON "public"."User"("provider", "providerId");

-- AddForeignKey
ALTER TABLE "public"."Tenant" ADD CONSTRAINT "Tenant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Property" ADD CONSTRAINT "Property_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Property" ADD CONSTRAINT "Property_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PropertyImage" ADD CONSTRAINT "PropertyImage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Room" ADD CONSTRAINT "Room_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RoomImage" ADD CONSTRAINT "RoomImage_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RoomAvailability" ADD CONSTRAINT "RoomAvailability_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingRoom" ADD CONSTRAINT "BookingRoom_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "public"."Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingRoom" ADD CONSTRAINT "BookingRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "public"."Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
