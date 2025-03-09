import type { Route } from "./+types/home";
import data from "build/output.json";
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
  const recipesData = Object.entries(data.data);

  const recipesList = recipesData.map((recipe) => {
    const recipeData = recipe[1];
    const link = "/recipe/" + recipeData.id;
    return (
      <li>
        <Link to={link}>{recipeData.title}</Link>
      </li>
    );
  });

  return (
    <>
      <div className="p-15">
        <h2>Recipes</h2>
        <ul>{recipesList}</ul>
      </div>
    </>
  );
}
