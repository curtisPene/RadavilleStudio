import { Header } from "@/components/header/Header";
import { useNavStore } from "@/hooks/useNavStore";
import { closeNav } from "@/stores/navSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { Outlet, useLocation } from "react-router";

const styleMap = {
  "/": {
    bgColor: "var(--color-carousel-bg)",
    fillColor: "var(--color-carousel-text)",
  },
  "/about": {
    bgColor: "var(--color-about-bg)",
    fillColor: "var(--color-about-text)",
  },
  "/curation": {
    bgColor: "var(--color-curation-bg)",
    fillColor: "var(--color-curation-text)",
  },
  "/contact": {
    bgColor: "var(--color-contact-bg)",
    fillColor: "var(--color-contact-text)",
  },
};

export const RootLayout = () => {
  const { pathname } = useLocation();
  const { isClosing } = useNavStore();
  const pageRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const colors = styleMap[pathname as keyof typeof styleMap] || {};

  useGSAP(
    () => {
      if (!pageRef.current) return;
      if (isClosing) {
        gsap.fromTo(
          pageRef.current,
          { y: "100%" },
          {
            y: "0%",
            duration: 1.2,
            ease: "power4.inOut",
            onStart: () => {
              gsap.set(pageRef.current, {
                zIndex: 50,
              });
            },
            onComplete: () => {
              dispatch(closeNav());
              gsap.delayedCall(0.5, () => {
                gsap.set(pageRef.current, {
                  zIndex: 0,
                });
              });
            },
          }
        );
      }
    },
    { dependencies: [isClosing] }
  );

  return (
    <div
      ref={pageRef}
      data-rootlayout
      className="relative min-h-screen"
      style={{ backgroundColor: colors.fillColor }}
    >
      <Header fillColor={colors.fillColor} backgroundColor={colors.bgColor} />
      <Outlet />
    </div>
  );
};
