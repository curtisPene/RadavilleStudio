import { WordMark } from "@/components/header/WordMark";
import { useNavStore } from "@/hooks/useNavStore";
import { XIcon } from "lucide-react";
import { useRef } from "react";

export const NavigationHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { closeNav } = useNavStore();

  return (
    <div
      ref={headerRef}
      data-navigation-header
      data-animate-navigation-header
      className="flex flex-row items-center justify-between opacity-0"
    >
      <WordMark fill="white" />
      <button
        onClick={() => {
          closeNav();
        }}
      >
        <XIcon stroke="white" />
      </button>
    </div>
  );
};
