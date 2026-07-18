import { useScrollTop } from "../../../shared/hooks/useScrollToTop";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowBigUpDashIcon } from "@hugeicons/core-free-icons";

export function ScrollToTopButton() {
  const { visible, scrollToTop } = useScrollTop();

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 p-2.5 rounded-full text-white shadow-lg hover:scale-105 transition bg-blue-400"
      aria-label="Scroll Button To Top Page"
    >
      <HugeiconsIcon icon={ArrowBigUpDashIcon} />
    </button>
  );
}
