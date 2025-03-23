import { transformRecipeData } from "~/transformation/transformRecipeData";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rosa Recipe App" },
    {
      name: "description",
      content: "Notebook full of tried, tested and perfected family recipes",
    },
  ];
}

export default function Home() {
  const recipesData = transformRecipeData();

  const recipesList = recipesData.map((recipe) => {
    const recipeData = recipe;
    const link = "/recipe/" + recipeData.id;
    return (
      <li key={`${recipeData.id}-link`}>
        <Link to={link} className={"text-blue-800 underline"}>
          {recipeData.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="p-15">
        <h1>Recipes</h1>
        <ul>{recipesList}</ul>
      </div>
    </>
  );
}
