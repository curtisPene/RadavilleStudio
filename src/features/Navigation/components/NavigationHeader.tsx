import { WordMark } from "@/components/header/WordMark";
import { XIcon } from "lucide-react";

export const NavigationHeader = () => {
  return (
    <div
      data-navigation-header
      className="flex flex-row items-center justify-between"
    >
      <WordMark fill="white" />
      <XIcon stroke="white" />
    </div>
  );
};
