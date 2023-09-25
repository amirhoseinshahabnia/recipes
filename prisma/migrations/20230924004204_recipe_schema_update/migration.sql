/*
  Warnings:

  - Changed the type of `recipeId` on the `Recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_recipeId_key" ON "Recipe"("recipeId");
