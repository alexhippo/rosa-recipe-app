import data from "build/output.json";

export type Recipe = {
  id: string;
  title: string;
  ingredients: string[];
  estimatedTime: string;
  originalRecipeTitle?: string;
  originalRecipeLink?: string;
  contents: string;
};

export type Recipes = Recipe[];

export function transformRecipeData() {
  let recipes: Recipes = [];

  const recipesData = Object.entries(data.data);

  recipesData.map((recipe) => {
    const recipeData = recipe[1];
    recipes.push({
      id: recipeData.id,
      title: recipeData.title,
      ingredients: recipeData.ingredients,
      estimatedTime: recipeData.estimatedTime,
      originalRecipeTitle: recipeData.originalRecipeTitle,
      originalRecipeLink: recipeData.originalRecipeLink,
      contents: recipeData.contents,
    });
  });

  return recipes;
}

export function getRecipeData(id: string) {
  const data = transformRecipeData();

  // filter out data for the recipe with the id
  const selectedRecipeData = data.filter((recipe) => {
    return recipe.id === id;
  });

  if (selectedRecipeData) {
    return selectedRecipeData;
  }
  return null;
}
