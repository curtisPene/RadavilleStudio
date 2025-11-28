import { memo, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageWrapperProps {
  /** Page content to wrap */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Page wrapper component for responsive layout
 * Provides consistent responsive padding and max-width constraints across all pages
 *
 * Responsive behavior:
 * - 320px (mobile): px-md (1rem)
 * - 640px (sm): px-lg (1.5rem)
 * - 768px (md): px-xl (2rem)
 * - 1024px (lg): px-2xl (2.5rem)
 * - 1280px (xl): px-3xl (3rem)
 * - Max-width: 1200px (centered)
 */
export const PageWrapper = memo(function PageWrapper({
  children,
  className,
}: PageWrapperProps) {
  const wrapperClasses = cn(
    // Container structure
    "w-full max-w-[1200px] mx-auto",
    // Responsive horizontal padding (custom theme variables)
    "px-md sm:px-lg md:px-xl lg:px-2xl xl:px-3xl",
    // Custom overrides
    className
  );

  return <div className={wrapperClasses}>{children}</div>;
});
