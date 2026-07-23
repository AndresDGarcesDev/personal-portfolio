import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/animate";
import { staggerDefaults } from "../config/defaults";

type StaggerOptions = {
  selector?: string;
  once?: boolean;
  start?: string;
} & gsap.TweenVars;

export function useStagger(
  ref: RefObject<HTMLElement | null>,
  options: StaggerOptions = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const items = gsap.utils.toArray<HTMLElement>(
        options.selector ?? "[data-animate]",
        ref.current,
      );

      if (!items.length) return;

      gsap.from(items, {
        ...staggerDefaults,
        ...options,

        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? "top 80%",
          once: options.once ?? true,
        },
      });
    },
    {
      scope: ref,
    },
  );
}
