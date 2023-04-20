import Link from "next/link";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
export interface PropsNavItems {
  id: number;
  name: string;
  href: string;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: PropsNavItems[] = [
    {
      id: 1,
      name: "Recetas",
      href: "/recipe",
    },
    {
      id: 2,
      name: "Agrega",
      href: "/create-recipes",
    },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-stone-100 p-6">
      <div className="flex items-center flex-shrink-0 text-stone-500 mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight">Meal</span>
          <span className="font-semibold text-xl tracking-tight text-yellow-600">
            Mate
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-stone-400 hover:text-yellow-600"
        >
          {isOpen ? (
            <CgClose className="w-6 h-6" />
          ) : (
            <CgMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          {navItems.map(({ id, name, href }) => (
            <Link
              key={id}
              href={href}
              className="block mt-4 lg:inline-block lg:mt-0 text-stone-500 hover:text-stone-800 mr-4"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
