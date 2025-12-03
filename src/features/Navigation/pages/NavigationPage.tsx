import { NavigationHeader } from "../components/NavigationHeader";
import { NavigationLinks } from "../components/NavigationLinks";
import { InfoSection } from "../components/InfoSection";
import { NavigationFooter } from "../components/NavigationFooter";
import { useLayoutEffect, useRef, type FC } from "react";
import { useGSAP } from "@gsap/react";
import { animationController } from "@/animation/controller/animation-controller";
import { useNavStore } from "@/hooks/useNavStore";
import { AnimationIds } from "@/types/AnimationIds";
import { StateIds } from "@/types/StateIds";
import {
  navPageOpenAnimation,
  navPageSettledAnimations,
} from "../animations/NavPageAnimations";

export const NavigationPage: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { navIsOpen } = useNavStore();

  useGSAP(
    () => {
      if (!pageRef.current) return;

      const pageMountTimeline = navPageOpenAnimation(pageRef);
      const pageSettledTimeline = navPageSettledAnimations(pageRef);

      animationController.registerBatch([
        { id: AnimationIds.NAV_OPEN, timeline: pageMountTimeline },
        { id: AnimationIds.NAV_SETTLED, timeline: pageSettledTimeline },
      ]);
    },

    { scope: pageRef }
  );

  useLayoutEffect(() => {
    if (navIsOpen) {
      animationController.gotoState(StateIds.NAV_OPEN);
    }
  }, [navIsOpen]);

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
