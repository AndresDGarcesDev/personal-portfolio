import {
  Github,
  Linkedin,
  Mail01Icon,
  MapPin,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef } from "react";
import { useHoverLift, useStagger } from "../../shared/animations/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);

  useStagger(footerRef);
  useHoverLift(githubRef);
  useHoverLift(linkedinRef);

  return (
    <footer ref={footerRef}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mt-3 grid gap-12 border-t border-gray-800 pt-12 md:grid-cols-3">
          <div data-animate>
            <h3 className="mb-5 text-xl font-bold text-text-primary">
              Andrés Garcés
            </h3>
            <p className="mt-4 text-text-secondary leading-7">
              Full Stack Developer especializado en construir aplicaciones
              modernas utilizando .NET, Java, React, Angular, React Native y
              arquitecturas escalables.
            </p>
          </div>
          <div data-animate>
            <h3 className="mb-5 text-xl font-bold text-text-primary">
              Contacto
            </h3>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={Mail01Icon} size={18} />
                andresd.garces01@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={MapPin} size={18} />
                Bogotá, Colombia
              </li>
            </ul>
          </div>
          <div data-animate>
            <h3 className="mb-5 text-xl font-bold text-text-primary">Redes</h3>
            <div className="flex gap-5">
              <a
                href="https://github.com/AndresDGarcesDev"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border p-3 text-text-secondary hover:border-border-hover hover:text-primary"
                ref={githubRef}
              >
                <HugeiconsIcon icon={Github} />
              </a>
              <a
                href="https://www.linkedin.com/in/andres-david-garces-castro/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border p-3 text-text-secondary hover:border-border-hover hover:text-primary"
                ref={linkedinRef}
              >
                <HugeiconsIcon icon={Linkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
