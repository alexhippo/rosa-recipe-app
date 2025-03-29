import { Link, useParams } from "react-router";
import RecipeDetails from "../components/RecipeDetails";
import type { Route } from "../+types/root";
import { getRecipeData } from "~/transformation/transformRecipeData";

export function meta({}: Route.MetaArgs) {
  const { id } = useParams();
  let recipeTitle = "";
  if (id) {
    const recipe = getRecipeData(id);
    if (recipe !== null) {
      recipeTitle = recipe[0].title;
    }
  }

  return [{ title: `${recipeTitle} - Rosa Recipe App` }];
}

export default function Recipe() {
  const { id } = useParams();

  if (id) {
    const recipe = getRecipeData(id);
    if (recipe) {
      return (
        <>
          <RecipeDetails
            title={recipe[0].title}
            ingredients={recipe[0].ingredients}
            estimatedTime={recipe[0].estimatedTime}
            originalRecipeTitle={recipe[0].originalRecipeTitle}
            originalRecipeLink={recipe[0].originalRecipeLink}
            contents={recipe[0].contents}
          />
          <div className={"pl-8 pb-2.5"}>
            <Link to="/rosa-recipe-app">← Back to home</Link>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <h2>Recipe not found</h2>
          <Link to="/">← Back to home</Link>
        </div>
      );
    }
  }

  return null;
}
