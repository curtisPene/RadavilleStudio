import image1 from "@/assets/images/curation/image-1.avif";
import image2 from "@/assets/images/curation/image-2.avif";
import image3 from "@/assets/images/curation/image-3.avif";
import image4 from "@/assets/images/curation/image-4.avif";
import image5 from "@/assets/images/curation/image-5.avif";
import image6 from "@/assets/images/curation/image-6.avif";
import image7 from "@/assets/images/curation/image-7.avif";
import image8 from "@/assets/images/curation/image-8.avif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, Observer);

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export interface CarouselItemParams {
  src: string;
  alt: string;
  index: number;
}

const CarouselItem = ({ src, alt, index }: CarouselItemParams) => {
  return (
    <div
      data-animate-carousel-item
      className={`shrink-0 w-35 sm:w-[250px] ${
        index % 2 === 1 ? "scale-[0.75]" : ""
      } `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full aspect-149/197 object-cover block"
      />
    </div>
  );
};

export const CurationCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const xPos = useRef(0); // current smoothed position
  const targetX = useRef(0); // accumulates deltaX

  useGSAP(
    () => {
      if (!carouselRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const scrollWidth = track.scrollWidth / 2;
      const setX = gsap.quickSetter(track, "x", "px");
      const wrap = gsap.utils.wrap(-scrollWidth, 0);

      Observer.create({
        target: track,
        type: "scroll,touch,pointer",
        onChangeX: (e) => {
          targetX.current += e.deltaX; // negative to move content opposite drag
        },
        preventDefault: true,
      });

      // LERP toward targetX for smooth momentum
      const tickerCallback = () => {
        xPos.current += (targetX.current - xPos.current) * 0.015; // positive factor
        setX(wrap(xPos.current));
      };
      gsap.ticker.add(tickerCallback);

      return () => {
        // Cleanup when component unmounts
        Observer.getAll().forEach((observer) => observer.kill());
        gsap.ticker.remove(tickerCallback);
      };
    },
    { scope: carouselRef }
  );

  return (
    <div
      ref={carouselRef}
      data-carousel-container
      className="overflow-x-clip py-(--spacing-5xl) "
    >
      <div
        ref={trackRef}
        data-animate-carousel
        className="flex flex-row gap-(--spacing-md)"
      >
        {Array.from({ length: 2 }).map(() => {
          return images.map((item, index) => {
            return <CarouselItem key={item} src={item} alt="" index={index} />;
          });
        })}
      </div>
    </div>
  );
};
