import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "hero" | "dark" | "gradient";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24",
          {
            "bg-background": variant === "default",
            "bg-gradient-hero": variant === "hero",
            "bg-secondary": variant === "dark",
            "bg-gradient-primary": variant === "gradient",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };