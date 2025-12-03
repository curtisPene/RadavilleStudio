import image1 from "@/assets/images/curation/image-1.avif";
import image2 from "@/assets/images/curation/image-2.avif";
import image3 from "@/assets/images/curation/image-3.avif";
import image4 from "@/assets/images/curation/image-4.avif";
import image5 from "@/assets/images/curation/image-5.avif";
import image6 from "@/assets/images/curation/image-6.avif";
import image7 from "@/assets/images/curation/image-7.avif";
import image8 from "@/assets/images/curation/image-8.avif";
import { cn } from "@/lib/cn";
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
      className={cn(
        `shrink-0 w-35 sm:w-[250px], ${index % 2 === 1 ? "scale-[0.75]" : ""} `
      )}
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
