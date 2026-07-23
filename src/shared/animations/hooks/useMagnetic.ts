import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/animate";

type MagneticOptions = {
  strength?: number;
  duration?: number;
};

export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  { strength = 0.35, duration = 0.3 }: MagneticOptions = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const element = ref.current;

      const xTo = gsap.quickTo(element, "x", {
        duration,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(element, "y", {
        duration,
        ease: "power3.out",
      });

      const handleMove = (event: MouseEvent) => {
        const rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        xTo(x * strength);
        yTo(y * strength);
      };

      const handleLeave = () => {
        xTo(0);
        yTo(0);
      };

      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseleave", handleLeave);

      return () => {
        element.removeEventListener("mousemove", handleMove);
        element.removeEventListener("mouseleave", handleLeave);
      };
    },
    {
      scope: ref,
    },
  );
}
