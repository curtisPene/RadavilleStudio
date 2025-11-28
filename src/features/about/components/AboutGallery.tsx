import image1 from "@/assets/images/about/image-1.avif";
import image2 from "@/assets/images/about/image-2.avif";
import image3 from "@/assets/images/about/image-3.avif";
import { BodySmall } from "@/components/Typography";
import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const images = [image1, image2, image3];

export interface AboutGalleryProps {
  src: string;
  alt: string;
  index: number;
}

export const GalleryItem: FC<AboutGalleryProps> = ({
  src,
  index,
  alt = "",
}) => {
  return (
    <section data-section-about-gallery-item data-animate-gallery-item>
      <BodySmall className="text-about-text opacity-55 mb-(--spacing-sm)">
        Fig {`${images.length < 10 ? 0 : ""}${index}`}
      </BodySmall>
      <img src={src} alt={alt} loading="lazy" />
    </section>
  );
};

export const AboutGallery = () => {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const items = scope.current?.querySelectorAll(
        "[data-animate-gallery-item]"
      );

      items?.forEach((galleryItem) => {
        gsap.fromTo(
          galleryItem,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: galleryItem,
              start: "top 90%",
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: scope }
  );
  return (
    <div
      ref={scope}
      data-section-about-gallery
      data-testid-about-gallery
      className="grid grid-cols-1 sm-425:grid-cols-2 gap-6 pt-(--spacing-2xl)"
    >
      {images.map((image, index) => (
        <GalleryItem key={index} src={image} index={index + 1} alt="" />
      ))}
    </div>
  );
};
