import { useGSAP } from "@gsap/react";
import { gsap } from "../gsap";
import type { RefObject } from "react";

export function useTerminal(ref: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (!ref.current) return;
      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      tl.from(q("[data-terminal-command]"), {
        autoAlpha: 0,
        x: -12,
        stagger: 0.35,
        duration: 0.25,
      });

      tl.from(
        q("[data-terminal-output]"),
        {
          autoAlpha: 0,
          y: 10,
          stagger: 0.25,
          duration: 0.25,
        },
        "<0.05",
      );

      tl.from(q("[data-terminal-json]"), {
        autoAlpha: 0,
        x: -8,
        stagger: 0.03,
        duration: 0.15,
      });

      tl.from(q("[data-terminal-skill]"), {
        autoAlpha: 0,
        scale: 0.92,
        stagger: 0.05,
        duration: 0.18,
      });

      tl.from(q("[data-terminal-build]"), {
        autoAlpha: 0,
        y: 8,
        duration: 0.25,
      });

      tl.from(q("[data-terminal-cursor]"), {
        autoAlpha: 0,
      });
    },
    {
      scope: ref,
    },
  );
}
