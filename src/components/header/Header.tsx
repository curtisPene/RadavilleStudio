import { MenuIcon } from "lucide-react";
import { WordMark } from "./WordMark";
import { BrandMark } from "./BrandMark";
export interface HeaderProps {
  fillColor: string;
  backgroundColor: string;
}

export const Header = ({ fillColor, backgroundColor }: HeaderProps) => {
  return (
    <header
      data-app-header
      className="flex flex-row items-center justify-between p-4"
      style={{ backgroundColor }}
    >
      <WordMark fill={fillColor} />
      <BrandMark fill={fillColor} />
      <MenuIcon stroke={fillColor} />
    </header>
  );
};
