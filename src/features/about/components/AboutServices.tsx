import { BodySmall, DisplayLarge } from "@/components/Typography";
import image4 from "@/assets/images/about/image-4.avif";
import { GalleryItem } from "./AboutGallery";
import { useRef } from "react";

export const AboutServices = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

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
