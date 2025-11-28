import { BodySmall, DisplayLarge } from "@/components/Typography";
import image4 from "@/assets/images/about/image-4.avif";
import { GalleryItem } from "./AboutGallery";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const AboutServices = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  useGSAP(
    async () => {
      if (!scopeRef.current) return;

      await document.fonts.ready;

      const title = scopeRef.current?.querySelector(
        "[data-animate-about-services-title]"
      );

      const paragraph1 = scopeRef.current?.querySelector(
        "[data-animate-about-services-paragraph-1]"
      );

      const paragraph2 = scopeRef.current?.querySelector(
        "[data-animate-about-services-paragraph-2]"
      );

      const servicesBio = scopeRef.current?.querySelector(
        "[data-animate-about-services-bio]"
      );

      const instagram = scopeRef.current?.querySelector(
        "[data-animate-about-services-instagram]"
      );

      const spotify = scopeRef.current?.querySelector(
        "[data-animate-about-services-spotify]"
      );

      const splitTitle = new SplitText(title, {
        type: "lines",
        mask: "lines",
      });

      const splitTParagraph1 = new SplitText(paragraph1, {
        type: "lines",
        mask: "lines",
      });

      const splitTParagraph2 = new SplitText(paragraph2, {
        type: "lines",
        mask: "lines",
      });

      const splitServicesBio = new SplitText(servicesBio, {
        type: "lines",
        mask: "lines",
      });

      const splitInstagram = new SplitText(instagram, {
        type: "lines",
        mask: "lines",
      });

      const splitSpotify = new SplitText(spotify, {
        type: "lines",
        mask: "lines",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
        },
      });
      timeline
        .fromTo(
          splitTitle.lines,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            stagger: 0.1,
          }
        )
        .fromTo(
          splitTParagraph1.lines,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "<0.2"
        )
        .fromTo(
          splitServicesBio.lines,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "<0.2"
        )
        .fromTo(
          splitInstagram.lines,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "<0.2"
        )
        .fromTo(
          splitSpotify.lines,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "<0.2"
        )
        .fromTo(
          splitTParagraph2.lines,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "<0.2"
        );

      gsap.fromTo(
        scopeRef.current?.querySelector("[data-animate-gallery-item]"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: scopeRef.current?.querySelector(
              "[data-animate-gallery-item]"
            ),
            start: "top 90%",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        timeline.kill();
      };
    },
    { scope: scopeRef }
  );

  return (
    <section
      ref={scopeRef}
      data-section-about-services
      data-testid-about-services
      className="py-(--spacing-2xl)"
    >
      <div
        data-section-about-services-header
        className="flex flex-row items-top justify-between"
      >
        <DisplayLarge
          className="font-playfair text-about-text w-[60%]"
          data-animate-about-services-title
          data-testid-about-services-title
        >
          Seaver Rada
        </DisplayLarge>
        <div className="w-[40%]">
          <BodySmall
            className="text-about-text pb-(--spacing-sm)"
            data-animate-about-services-bio
            data-testid-about-services-bio
          >
            Creative Director & Interior Designer Located in Düsseldorf
          </BodySmall>
          <div data-animate-about-services-social>
            <BodySmall
              className="text-about-text underline"
              data-animate-about-services-instagram
            >
              Instagram
            </BodySmall>
            <BodySmall
              className="text-about-text underline"
              data-animate-about-services-spotify
            >
              Spotify
            </BodySmall>
          </div>
        </div>
      </div>
      <div
        data-section-about-services-content
        data-testid-about-services-content
      >
        <BodySmall
          className="text-about-text my-(--spacing-md)"
          data-animate-about-services-paragraph-1
        >
          As a creative director and interior designer, my calling is to bring
          ideas to life. With a BSc. in Psychology, I combine a trained
          understanding of human behavior with a refined eye for design. This
          unique fusion creates a synergy where psychology and design intersect,
          resulting in spaces that are both visually captivating and profoundly
          human. By recognizing how environments shape emotions and actions,
          design becomes a tool for crafting intuitive, meaningful experiences —
          a seamless balance of form and function.
        </BodySmall>
        <BodySmall
          className="text-about-text mb-(--spacing-2xl)"
          data-animate-about-services-paragraph-2
        >
          Inspired by the "Beauty of our Dingwelt" and design luminaries, I
          create holistic interiors and cohesive brands. While committed to the
          form follows function (FFF) principle, I equally value non-functional
          design elements that solely serve aesthetic purposes — a nuance often
          overlooked in today's era.
        </BodySmall>

        <GalleryItem data-animate-gallery-item src={image4} index={4} alt="" />
      </div>
    </section>
  );
};
