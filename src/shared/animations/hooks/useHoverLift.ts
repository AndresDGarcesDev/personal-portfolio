import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/animate";
import { hoverDefaults } from "../config/defaults";

export function useHoverLift(ref: RefObject<HTMLElement | null>, options = {}) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const element = ref.current;

      const enter = () => {
        gsap.to(element, {
          ...hoverDefaults,
          ...options,
        });
      };

      const leave = () => {
        gsap.to(element, {
          y: 0,
          scale: 1,
          duration: hoverDefaults.duration,
          ease: hoverDefaults.ease,
        });
      };

      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);

      return () => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      };
    },
    {
      scope: ref,
    },
  );
}
