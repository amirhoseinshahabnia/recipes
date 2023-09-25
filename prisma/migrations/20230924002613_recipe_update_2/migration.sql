/*
  Warnings:

  - A unique constraint covering the columns `[recipeId]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recipe_recipeId_key" ON "Recipe"("recipeId");
