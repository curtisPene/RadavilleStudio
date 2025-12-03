import { MenuIcon } from "lucide-react";
import { WordMark } from "./WordMark";
import { BrandMark } from "./BrandMark";
import { useNavStore } from "@/hooks/useNavStore";
import { createPortal } from "react-dom";
import { NavigationPage } from "@/features/Navigation/pages/NavigationPage";
export interface HeaderProps {
  fillColor: string;
  backgroundColor: string;
}

export const Header = ({ fillColor, backgroundColor }: HeaderProps) => {
  const target = document.getElementById("portal-root")!;
  const { navIsOpen, openNav } = useNavStore();
  return (
    <>
      <header
        data-app-header
        className="flex flex-row items-center justify-between p-4 "
        style={{ backgroundColor }}
      >
        <WordMark fill={fillColor} />
        <BrandMark fill={fillColor} />
        <button
          onClick={() => {
            openNav();
          }}
        >
          <MenuIcon stroke={fillColor} />
        </button>
      </header>
      {navIsOpen && createPortal(<NavigationPage />, target)}
    </>
  );
};
