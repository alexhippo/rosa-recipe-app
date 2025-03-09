import parse from "html-react-parser";
import { useId } from "react";

type RecipeDetailsProps = {
  title: string;
  ingredients: string[];
  estimatedTime: string;
  originalRecipeLink?: string;
  contents: string;
};

export default function RecipeDetails({
  title,
  ingredients,
  estimatedTime,
  originalRecipeLink,
  contents,
}: RecipeDetailsProps) {
  return (
    <div className="p-15" key={useId()}>
      <h2>{title}</h2>
      <h3 className="">Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <h3>Estimated Time</h3>
      <p>{estimatedTime}</p>
      {originalRecipeLink && (
        <>
          <h3>Original Recipe Link</h3>
          <a href={originalRecipeLink}>
            <p>Link to the original recipe</p>
          </a>
        </>
      )}
      {parse(contents)}
    </div>
  );
}
