import type { ReactNode, ElementType } from "react";
import { cn } from "../lib/cn";

type TypographyVariant =
  // Headers
  | "display-large"
  | "display-medium"
  | "display-small"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  // Body Text
  | "body-large"
  | "body-medium"
  | "body-small"
  // Labels
  | "label-large"
  | "label-medium"
  | "label-small"
  // Other
  | "caption"
  | "overline";

interface TypographyProps {
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

const variantStyles: Record<
  TypographyVariant,
  { style: string; defaultElement: ElementType }
> = {
  // Display variants - for hero sections and attention-grabbing text
  "display-large": {
    style:
      "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none",
    defaultElement: "h1",
  },
  "display-medium": {
    style:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none",
    defaultElement: "h1",
  },
  "display-small": {
    style:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight",
    defaultElement: "h1",
  },

  // Heading variants
  "heading-1": {
    style:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
    defaultElement: "h2",
  },
  "heading-2": {
    style: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug",
    defaultElement: "h2",
  },
  "heading-3": {
    style:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug",
    defaultElement: "h3",
  },
  "heading-4": {
    style:
      "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed",
    defaultElement: "h4",
  },

  // Body text variants
  "body-large": {
    style:
      "text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-gray-700",
    defaultElement: "p",
  },
  "body-medium": {
    style:
      "text-sm sm:text-base md:text-base lg:text-base leading-relaxed text-gray-600",
    defaultElement: "p",
  },
  "body-small": {
    style:
      "text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed text-gray-500",
    defaultElement: "p",
  },

  // Label variants
  "label-large": {
    style: "text-base sm:text-lg font-semibold uppercase tracking-wide",
    defaultElement: "label",
  },
  "label-medium": {
    style: "text-sm sm:text-base font-semibold uppercase tracking-wide",
    defaultElement: "label",
  },
  "label-small": {
    style: "text-xs sm:text-sm font-semibold uppercase tracking-widest",
    defaultElement: "label",
  },

  // Other variants
  caption: {
    style: "text-xs sm:text-sm leading-snug text-gray-500",
    defaultElement: "small",
  },
  overline: {
    style: "text-xs font-semibold uppercase tracking-widest text-gray-400",
    defaultElement: "span",
  },
};

/**
 * Typography Component
 * Responsive text element with type scaling starting from 320px (mobile-first)
 * Uses semantic HTML elements by default
 *
 * @example
 * <Typography variant="heading-1">Main Heading</Typography>
 * <Typography variant="body-medium" className="text-blue-500">Custom paragraph</Typography>
 * <Typography variant="label-medium" as="label">Form Label</Typography>
 */
export const Typography = ({
  variant = "body-medium",
  className,
  children,
  as,
}: TypographyProps) => {
  const config = variantStyles[variant];
  const Element = (as as ElementType) || config.defaultElement;
  const styles = cn(config.style, className);

  return <Element className={styles}>{children}</Element>;
};

// Display Components
export const DisplayLarge = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="display-large" {...props} />
);

export const DisplayMedium = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="display-medium" {...props} />
);

export const DisplaySmall = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="display-small" {...props} />
);

// Heading Components
export const H1 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading-1" {...props} />
);

export const H2 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading-2" {...props} />
);

export const H3 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading-3" {...props} />
);

export const H4 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading-4" {...props} />
);

// Body Text Components
export const BodyLarge = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-large" {...props} />
);

export const BodyMedium = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-medium" {...props} />
);

export const BodySmall = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-small" {...props} />
);

export const Paragraph = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-medium" {...props} />
);

// Label Components
export const LabelLarge = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="label-large" {...props} />
);

export const LabelMedium = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="label-medium" {...props} />
);

export const LabelSmall = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="label-small" {...props} />
);

export const Label = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="label-medium" {...props} />
);

// Other Components
export const Caption = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="caption" {...props} />
);

export const Overline = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="overline" {...props} />
);

export const Text = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body-medium" as="span" {...props} />
);
