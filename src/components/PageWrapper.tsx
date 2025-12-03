import { memo, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = memo(function PageWrapper({
  children,
  className,
}: PageWrapperProps) {
  const wrapperClasses = cn(
    "w-full max-w-[1200px] mx-auto",
    "px-md sm:px-lg md:px-xl lg:px-2xl xl:px-3xl",
    className
  );

  return <div className={wrapperClasses}>{children}</div>;
});
