import parse from "html-react-parser";
import { useId } from "react";

type RecipeDetailsProps = {
  title: string;
  ingredients: string[];
  estimatedTime: string;
  originalRecipeTitle?: string;
  originalRecipeLink?: string;
  contents: string;
};

export default function RecipeDetails({
  title,
  ingredients,
  estimatedTime,
  originalRecipeTitle,
  originalRecipeLink,
  contents,
}: RecipeDetailsProps) {
  return (
    <article className="p-15" key={useId()}>
      <h2>{title}</h2>
      <h3 className="">Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={`${ingredient}-key`}>{ingredient}</li>;
        })}
      </ul>
      <h3>Estimated Time</h3>
      <p>{estimatedTime}</p>
      {originalRecipeLink && (
        <>
          <h3>Original Recipe</h3>
          <a
            className="text-blue-600 dark:text-blue-400 underline"
            href={originalRecipeLink}
          >
            <p>{originalRecipeTitle}</p>
          </a>
        </>
      )}
      {parse(contents)}
    </article>
  );
}
