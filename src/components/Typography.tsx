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
  [key: string]: any;
}

const variantStyles: Record<
  TypographyVariant,
  { style: string; defaultElement: ElementType }
> = {
  // Display variants - for hero sections and attention-grabbing text
  "display-large": {
    style:
      "text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight",
    defaultElement: "h1",
  },
  "display-medium": {
    style:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight",
    defaultElement: "h1",
  },
  "display-small": {
    style:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight",
    defaultElement: "h1",
  },

  // Heading variants
  "heading-1": {
    style:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
    defaultElement: "h2",
  },
  "heading-2": {
    style: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold",
    defaultElement: "h2",
  },
  "heading-3": {
    style:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold",
    defaultElement: "h3",
  },
  "heading-4": {
    style:
      "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",
    defaultElement: "h4",
  },

  // Body text variants
  "body-large": {
    style: "text-base sm:text-lg md:text-lg lg:text-lg",
    defaultElement: "p",
  },
  "body-medium": {
    style: "text-sm sm:text-base md:text-base lg:text-base",
    defaultElement: "p",
  },
  "body-small": {
    style: "text-xs sm:text-sm md:text-sm lg:text-sm",
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
    style: "text-xs sm:text-sm",
    defaultElement: "small",
  },
  overline: {
    style: "text-xs font-semibold uppercase tracking-widest",
    defaultElement: "span",
  },
};

/**
 * Typography Component
 * Responsive text element with type scaling starting from 320px (mobile-first)
 * Uses semantic HTML elements by default
 *
 * Color is controlled via className prop - no hardcoded text colors
 *
 * @example
 * <Typography variant="heading-1">Main Heading</Typography>
 * <Typography variant="body-medium" className="text-about-page-fill">Custom paragraph</Typography>
 * <Typography variant="label-medium" as="label">Form Label</Typography>
 */
export const Typography = ({
  variant = "body-medium",
  className,
  children,
  as,
  ...props
}: TypographyProps) => {
  const config = variantStyles[variant];
  const Element = (as as ElementType) || config.defaultElement;
  const styles = cn(config.style, className);

  return (
    <Element className={styles} {...props}>
      {children}
    </Element>
  );
};

type VariantProps = Omit<TypographyProps, "variant">;

// Display Components
export const DisplayLarge: React.FC<VariantProps> = ({
  children,
  ...props
}) => (
  <Typography variant="display-large" {...props}>
    {children}
  </Typography>
);

export const DisplayMedium: React.FC<VariantProps> = ({
  children,
  ...props
}) => (
  <Typography variant="display-medium" {...props}>
    {children}
  </Typography>
);

export const DisplaySmall: React.FC<VariantProps> = ({
  children,
  ...props
}) => (
  <Typography variant="display-small" {...props}>
    {children}
  </Typography>
);

// Heading Components
export const H1: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="heading-1" {...props}>
    {children}
  </Typography>
);

export const H2: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="heading-2" {...props}>
    {children}
  </Typography>
);

export const H3: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="heading-3" {...props}>
    {children}
  </Typography>
);

export const H4: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="heading-4" {...props}>
    {children}
  </Typography>
);

// Body Text Components
export const BodyLarge: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="body-large" {...props}>
    {children}
  </Typography>
);

export const BodyMedium: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="body-medium" {...props}>
    {children}
  </Typography>
);

export const BodySmall: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="body-small" {...props}>
    {children}
  </Typography>
);

export const Paragraph: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="body-medium" {...props}>
    {children}
  </Typography>
);

// Label Components
export const LabelLarge: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="label-large" {...props}>
    {children}
  </Typography>
);

export const LabelMedium: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="label-medium" {...props}>
    {children}
  </Typography>
);

export const LabelSmall: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="label-small" {...props}>
    {children}
  </Typography>
);

export const Label: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="label-medium" {...props}>
    {children}
  </Typography>
);

// Other Components
export const Caption: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="caption" {...props}>
    {children}
  </Typography>
);

export const Overline: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="overline" {...props}>
    {children}
  </Typography>
);

export const Text: React.FC<VariantProps> = ({ children, ...props }) => (
  <Typography variant="body-medium" as="span" {...props}>
    {children}
  </Typography>
);
