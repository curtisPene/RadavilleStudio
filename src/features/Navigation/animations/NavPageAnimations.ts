import gsap from "gsap";
import type { RefObject } from "react";
import { createNavLinksEntranceAnimation } from "./NavLinksAnimations";
import { animationController } from "@/animation/controller/animation-controller";
import { StateIds } from "@/types/StateIds";
import { createNavHeaderEntranceAnimation } from "./NavHeaderAnimations";

export interface ITarget {
  target: HTMLElement;
}

export const navPageOpenAnimation = (
  pageRef: RefObject<HTMLDivElement | null>
) => {
  const page = pageRef.current! as HTMLDivElement;
  const timeline = gsap.timeline({ paused: true }).to(page, {
    y: 0,
    duration: 1.2,
    ease: "power4.inOut",
    onComplete: () => {
      animationController.gotoState(StateIds.NAV_SETTLED);
    },
  });

  return timeline;
};

export const navPageSettledAnimations = (
  navPageRef: RefObject<HTMLDivElement | null>
) => {
  const timeline = gsap.timeline({ paused: true });

  const navComponentContainer = navPageRef.current!.querySelector(
    "[data-navigation-links]"
  )! as HTMLDivElement;
  const navHeaderContainer = navPageRef.current!.querySelector(
    "[data-animate-navigation-header]"
  )! as HTMLDivElement;

  const navLinksTimeline = createNavLinksEntranceAnimation(
    navComponentContainer
  );

  const navHeaderTimeline =
    createNavHeaderEntranceAnimation(navHeaderContainer);

  timeline.add(navLinksTimeline.play()).add(navHeaderTimeline.play(), "-=0.8");

  return timeline;
};
