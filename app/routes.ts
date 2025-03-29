import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  ...prefix("/rosa-recipe-app", [
    index("routes/home.tsx"),
    route("recipe/:id", "routes/recipe.tsx"),
  ]),
] satisfies RouteConfig;
