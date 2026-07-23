import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/animate";
import { revealDefaults } from "../config/defaults";

type RevealOptions = {
  once?: boolean;
  start?: string;
  end?: string;
} & gsap.TweenVars;

export function useReveal(
  ref: RefObject<HTMLElement | null>,
  options: RevealOptions = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        ...revealDefaults,
        ...options,

        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? "top 85%",
          end: options.end,
          once: options.once ?? true,
        },
      });
    },
    {
      scope: ref,
    },
  );
}
