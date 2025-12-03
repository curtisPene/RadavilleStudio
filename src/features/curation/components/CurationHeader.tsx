import { BodySmall, DisplayMedium } from "@/components/Typography";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export const CurationHeader = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} data-curation-header>
      <DisplayMedium
        data-animate-display
        className="font-playfair text-center mb-(--spacing-md)"
      >
        Studio Curation
      </DisplayMedium>
      <BodySmall
        data-animate-body
        className="text-center text-[10px] leading-tight w-[55%] mx-auto"
      >
        A weekly digest of design, art, music, fashion, architecture, and
        cultural phenomena. New coolhunting blog posts every Monday, 08:00 CET/
        CEST.
      </BodySmall>
    </div>
  );
};
