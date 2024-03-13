import { BeakerIcon, CakeIcon, HomeIcon } from "@heroicons/react/16/solid";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "View Recipes",
    href: "/dashboard/recipes",
    icon: CakeIcon,
  },
  {
    name: "Create Recipe",
    href: "/dashboard/recipes/create",
    icon: BeakerIcon,
  },
];
export default function NavLinks() {
  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
