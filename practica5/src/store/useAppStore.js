import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice } from "./recipeSlice";
import { createFavoritesSlice } from "./favoritesSlice";

export const useAppStore = create(devtools((...args) => ({
    ...createRecipesSlice(...args),
    ...createFavoritesSlice(...args)
})))