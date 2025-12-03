import { useRef } from "react";

export const NavigationFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div data-navigation-footer-container className="overflow-clip w-full">
      <div
        ref={footerRef}
        className="flex flex-row items-center justify-between pt-4 "
        data-navigation-footer
      >
        <span className="text-white opacity-50 text-xs">
          A Multi-Disciplinary
        </span>
        <span className="text-white opacity-50 text-xs">Design Studio</span>
      </div>
    </div>
  );
};
