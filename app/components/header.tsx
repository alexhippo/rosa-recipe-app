import { Link } from "react-router";

export function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 border-b-2 bg-amber-300">
      <Link to="/">
        <h1>
          <span className="font-cursive text-5xl">Rosa</span>{" "}
          <span className="font-serif text-lg">recipe app</span>
        </h1>
      </Link>
    </header>
  );
}
