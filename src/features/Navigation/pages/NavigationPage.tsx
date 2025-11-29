import { NavigationHeader } from "../components/NavigationHeader";
import { NavigationLinks } from "../components/NavigationLinks";
import { InfoSection } from "../components/InfoSection";
import { NavigationFooter } from "../components/NavigationFooter";
import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import gsap from "gsap";

export const NavigationPage: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(pageRef.current, {
      y: 0,
      duration: 1.2,
      ease: "power4.inOut",
    });
  });

  return (
    <div
      ref={pageRef}
      data-navigation-overlay
      data-animate-navigation-overlay
      className="fixed inset-0 bg-neutral-950 z-40 p-4 flex flex-col translate-y-full"
    >
      <NavigationHeader />
      <div data-navigation-content className="flex flex-row h-full">
        <NavigationLinks />
        <InfoSection />
      </div>
      <NavigationFooter />
    </div>
  );
};
