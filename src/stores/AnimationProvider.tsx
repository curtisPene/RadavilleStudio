import { animationController } from "@/animation/controller/animation-controller";
import { navStateMap } from "@/animation/maps/navStateMap";
import "@/features/Navigation/animations/NavPageAnimations"; // Triggers animation pre-registration
import { useEffect } from "react";

export const AnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    Object.entries(navStateMap).forEach(([state, timelineIds]) => {
      animationController.defineState(
        state as keyof typeof navStateMap,
        timelineIds
      );
    });
    animationController.ready();
  }, []);

  return children;
};
