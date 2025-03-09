import { useParams } from "react-router";
import RecipeDetails from "../recipe/recipeDetails";
import data from "build/output.json";

export default function Recipe() {
  const { id } = useParams();
  const recipesData = Object.entries(data.data);

  // filter out data for the recipe with the id
  const selectedRecipeData = recipesData.filter((recipeData) => {
    const recipe = recipeData[1];
    return recipe.id === id;
  })[0][1];

  if (selectedRecipeData) {
    return (
      <>
        <RecipeDetails
          title={selectedRecipeData.title}
          ingredients={selectedRecipeData.ingredients}
          estimatedTime={selectedRecipeData.estimatedTime}
          originalRecipeLink={selectedRecipeData.originalRecipeLink}
          contents={selectedRecipeData.contents}
        />
      </>
    );
  }

  return null;
}
