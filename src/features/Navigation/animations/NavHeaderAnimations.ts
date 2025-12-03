import gsap from "gsap";

export const createNavHeaderEntranceAnimation = (
  headerComponent: HTMLDivElement
) => {
  const timeline = gsap.timeline({ paused: true }).to(headerComponent, {
    opacity: 1,
    duration: 0.8,
    ease: "power4.inOut",
  });

  return timeline;
};
