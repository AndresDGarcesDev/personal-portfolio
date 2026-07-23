import { useRef } from "react";
import { useStagger } from "../../shared/animations/gsap";

export default function Copyright() {
  const copyrightRef = useRef<HTMLDivElement>(null);

  useStagger(copyrightRef, {
    start: "top bottom",
  });

  return (
    <div
      className="border-t border-border-section py-3 px-4 text-sm mx-auto max-w-7xl"
      ref={copyrightRef}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-text-primary" data-animate>
          Portafolio construido con React • TypeScript • Vite • Tailwind CSS y
          GSAP
        </p>
        <p className="text-text-primary" data-animate>
          ©{" "}
          <span className="font-bold">
            {new Date().getFullYear()} Andrés Garcés.
          </span>{" "}
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
