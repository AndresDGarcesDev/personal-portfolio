import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "../utils/animate";
import { splitTextConfig, splitTextDefaults } from "../config/defaults";

type SplitType = "chars" | "words" | "lines";

type SplitTextOptions = {
  type?: SplitType;
  once?: boolean;
  start?: string;
  end?: string;
} & gsap.TweenVars;

export function useSplitText(
  ref: RefObject<HTMLElement | null>,
  options: SplitTextOptions = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const {
        type = splitTextConfig.type,
        once = true,
        start = "top 85%",
        end,
        ...tweenOptions
      } = options;

      const split = SplitText.create(ref.current, {
        type,
      });

      const targets =
        type === "chars"
          ? split.chars
          : type === "words"
            ? split.words
            : split.lines;

      gsap.from(targets, {
        ...splitTextDefaults,
        ...tweenOptions,

        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          once,
        },
      });

      return () => {
        split.revert();
      };
    },

    {
      scope: ref,
    },
  );
}
