import { useState } from "react";
import HeroMetricCard from "./hero/MetricData";
import { metrics } from "../data/metrics-data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DocumentAttachmentIcon,
  TerminalIcon,
} from "@hugeicons/core-free-icons";
import TerminalHero from "./hero/terminal/terminal-hero/TerminalHero";
import TerminalModal from "./hero/terminal/terminal-modal/TerminalModal";

export default function HeroSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <section
      className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 pt-28 lg:flex-row lg:items-center lg:justify-between"
      id="hero"
    >
      <div className="flex justify-center align-middle items-center mx-auto">
        <div>
          <div className="max-w-2xl">
            <h1 className="text-5xl text-text-primary font-bold leading-tight mb-5">
              Hola, soy{" "}
              <span className="text-text-title-section">Andrés Garcés</span>
            </h1>
            <h2 className="text-3xl text-text-secondary">
              Software Engineer · FullStack Developer
            </h2>
            <p className="mt-2 text-text-title-section tracking-[0.15rem] uppercase">
              Backend • Frontend • Cloud • Mobile
            </p>
            <p className="pt-8 max-w-xl text-lg leading-8 text-text-secondary">
              Desarrollo soluciones de software escalables utilizando .NET, Java
              y Web, con especial interés en arquitectura backend, plataformas
              cloud y aplicaciones móviles.
            </p>
            <div className="my-10 flex gap-4">
              <a
                href="/documents/Andres_David_Garces_Castro_CV_FullStack_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-5 rounded border border-border bg-background-btn text-gray-100 font-semibold hover:bg-background-btn-hover hover:border-border-hover"
                aria-label="Abrir documento en una nueva pestaña"
              >
                <HugeiconsIcon icon={DocumentAttachmentIcon} />
                Ver CV
              </a>
              <button
                className="inline-flex items-center gap-2 py-2 px-5 text-text-primary rounded border border-primary hover:border-cyan-700 hover:bg-cyan-500/10"
                aria-label="Botón abrir terminal información adicional"
                onClick={() => setIsTerminalOpen(true)}
              >
                <HugeiconsIcon icon={TerminalIcon} />
                Abrir terminal
              </button>
              <TerminalModal
                open={isTerminalOpen}
                onClose={() => setIsTerminalOpen(false)}
              />
            </div>
            <div className="mt-12 border-t border-slate-800 pt-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <HeroMetricCard key={metric.label} metric={metric} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TerminalHero />
    </section>
  );
}
