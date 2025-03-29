import { Link } from "react-router";
import { basename } from "~/helpers/helpers";

export function Header() {
  return (
    <header className="w-screen flex items-center justify-between p-3 lg:px-8 border-b-2 bg-amber-300">
      <Link
        to={basename}
        className="no-underline hover:font-bold focus:font-bold bg-transparent text-black"
      >
        <span className="font-cursive text-5xl">Rosa</span>{" "}
        <span className="font-serif text-lg">recipe app</span>
      </Link>
    </header>
  );
}
