import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const createNavLinksEntranceAnimation = (
  linksComponent: HTMLDivElement
) => {
  const links = linksComponent.querySelectorAll("[data-nav-item]");

  const splitText = new SplitText(links, {
    type: "lines",
    mask: "lines",
  });

  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    splitText.lines,
    { y: "100%" },
    {
      y: 0,
      duration: 1.2,
      ease: "power4.inOut",
    }
  );

  return tl;
};
