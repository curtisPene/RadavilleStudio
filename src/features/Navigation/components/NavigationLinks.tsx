import { useRef, type FC, type MouseEventHandler } from "react";
import { Link } from "react-router";

const navLinks = ["Home", "About", "Curation", "Contact"];

type NavItemProps = {
  children: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const NavItem: FC<NavItemProps> = ({ children, onClick }) => {
  let path = `${(children as string).toLowerCase()}`;
  path = path === "home" ? "/" : path;

  return (
    <Link
      data-nav-item
      className="font-playfair text-4xl text-white"
      to={path}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const NavigationLinks = () => {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={navRef}
      data-navigation-links
      data-animate-navigation-links
      className="flex flex-col items-start justify-end"
    >
      {navLinks.map((link) => (
        <NavItem key={link}>{link}</NavItem>
      ))}
    </div>
  );
};
