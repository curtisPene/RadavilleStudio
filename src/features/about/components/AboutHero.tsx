import { useRef } from "react";
import { BodySmall, DisplayLarge } from "@/components/Typography";

export const AboutHero = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} data-section-about data-testid-about>
      <DisplayLarge
        className="font-playfair text-about-text mb-(--spacing-4xl) text-8xl"
        data-animate-about-title
        data-testid-about-title
      >
        Studio Profile
      </DisplayLarge>
      <div data-section-about-content>
        <BodySmall
          className="text-about-text mb-(--spacing-md)"
          data-animate-about-label
          data-testid-about-label
        >
          (About)
        </BodySmall>
        <BodySmall
          className="text-about-text"
          data-animate-about-description
          data-testid-about-description
        >
          Radaville Studio is a multi-disciplinary design studio and creative
          consultancy nestled in the vibrant city of Düsseldorf, Germany.
          Established in 2024 by Seaver Rada, our expertise lies in the realms
          of interior design, art direction, and branding. Spatial design is
          about creating environments that enrich human well-being. A
          thoughtfully crafted space calms the mind, inspires creativity, and
          evokes emotion. Through a holistic approach, design transforms into
          something greater than the sum of its parts. It becomes an immersive
          experience — an environment that transcends its physical elements to
          inspire connection, reflection, and a sense of belonging.
        </BodySmall>
      </div>
    </section>
  );
};
