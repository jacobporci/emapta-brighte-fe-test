/*
  Warnings:

  - You are about to drop the column `State` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `Street` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `Suburb` on the `Referral` table. All the data in the column will be lost.
  - Added the required column `state` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suburb` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Referral" DROP COLUMN "State",
DROP COLUMN "Street",
DROP COLUMN "Suburb",
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "suburb" TEXT NOT NULL;
