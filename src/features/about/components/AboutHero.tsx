import { useRef } from "react";
import { BodySmall, DisplayLarge } from "@/components/Typography";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

export const AboutHero = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    async () => {
      if (!ref.current) return;
      await document.fonts.ready;
      const title = ref.current.querySelector("[data-animate-about-title]");
      const content = ref.current.querySelector(
        "[data-animate-about-description]"
      );
      const label = ref.current.querySelector("[data-animate-about-label]");

      const splitTitle = new SplitText(title, { type: "lines", mask: "lines" });
      const splitContent = new SplitText(content, {
        type: "lines",
        mask: "lines",
      });
      const splitLabel = new SplitText(label, { type: "lines", mask: "lines" });

      const tl = gsap
        .timeline()
        .fromTo(
          splitTitle.lines,
          {
            y: 100,
          },
          { y: 0, duration: 1.2, ease: "power4.inOut" }
        )
        .fromTo(
          splitLabel.lines,
          {
            y: 100,
          },
          { y: 0, duration: 0.5, ease: "power4.out" },
          "-=0.5"
        )
        .fromTo(
          splitContent.lines,
          {
            y: 100,
          },
          { y: 0, duration: 0.5, stagger: 0.05, ease: "power4.out" },
          "<"
        );

      return () => {
        tl.revert();
        splitTitle.revert();
        splitContent.revert();
        splitLabel.revert();
      };
    },
    { scope: ref }
  );

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
