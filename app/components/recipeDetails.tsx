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
    <article className="pl-15 pt-15 pr-15 pb-5" key={useId()}>
      <h1>{title}</h1>
      <h2 className="">Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={`${ingredient}-key`}>{ingredient}</li>;
        })}
      </ul>
      <h2>Estimated Time</h2>
      <p>{estimatedTime}</p>
      {originalRecipeLink && (
        <>
          <h2>Original Recipe</h2>
          <a href={originalRecipeLink}>{originalRecipeTitle}</a>
        </>
      )}
      {parse(contents)}
    </article>
  );
}
