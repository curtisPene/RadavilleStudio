import { MenuIcon } from "lucide-react";
import { WordMark } from "./WordMark";
import { BrandMark } from "./BrandMark";

export const Header = () => {
  return (
    <header
      data-app-header
      className="flex flex-row items-center justify-between pt-4"
    >
      <WordMark />
      <BrandMark />
      <MenuIcon stroke="white" />
    </header>
  );
};
