/*
  Warnings:

  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
UPDATE "Post" SET "content"='DRAFT' WHERE "content" IS NULL;
ALTER TABLE "Post" ALTER COLUMN "content" SET NOT NULL;
 