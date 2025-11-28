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
 * - 320px (mobile): padding-x spacing-md
 * - 640px (sm): padding-x spacing-lg
 * - 768px (md): padding-x spacing-xl
 * - 1024px (lg): padding-x spacing-2xl
 * - 1280px (xl): padding-x spacing-3xl
 * - Max-width: 1200px (centered)
 *
 * @example
 * export function HomePage() {
 *   return (
 *     <Wrapper>
 *       <Hero />
 *       <Portfolio />
 *       <Contact />
 *     </Wrapper>
 *   )
 * }
 */
export const PageWrapper = memo(function Wrapper({
  children,
  className,
}: PageWrapperProps) {
  const wrapperClasses = cn(
    // Container structure
    "w-full max-w-[1200px] mx-auto",
    // Responsive horizontal padding
    "px-spacing-md sm:px-spacing-lg md:px-spacing-xl lg:px-spacing-2xl xl:px-spacing-3xl",
    // Custom overrides
    className
  );

  return <div className={wrapperClasses}>{children}</div>;
});
