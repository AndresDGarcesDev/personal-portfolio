import { useState } from "react";
import HeroMetricCard from "./hero/MetricData";
import { metrics } from "../data/metrics-data";
import ContactTerminal from "./hero/terminal/TerminalModal";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckCircle,
  CircleDot,
  DocumentAttachmentIcon,
  SquareIcon,
  TerminalIcon,
} from "@hugeicons/core-free-icons";

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
              Hola, soy <span className="text-text-title-section">Andrés Garcés</span>
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
              <ContactTerminal
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
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-[#0D1117] shadow-2xl ">
        <div className="flex items-center justify-between border-b border-slate-700 bg-[#161B22] px-5 py-3">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={CircleDot}
              size={12}
              fill="#ef4444"
              className="text-danger"
            />
            <HugeiconsIcon
              icon={CircleDot}
              size={12}
              fill="#f59e0b"
              className="text-warning"
            />
            <HugeiconsIcon
              icon={CircleDot}
              size={12}
              fill="#22c55e"
              className="text-success"
            />
          </div>
          <span className="text-xs tracking-wider text-slate-400 uppercase">
            profile.sh
          </span>
          <HugeiconsIcon
            icon={SquareIcon}
            size={12}
            className="text-transparent"
          />
        </div>
        <div className="space-y-1 p-6 font-mono text-sm leading-7">
          <div>
            <span className="text-cyan-400">$</span>{" "}
            <span className="text-slate-300">whoami</span>
          </div>
          <p className="text-white">Andrés David Garcés Castro</p>
          <div>
            <span className="text-cyan-400">$</span>{" "}
            <span className="text-slate-300">profile --help</span>
          </div>
          <div className="rounded-xl bg-slate-900 p-4">
            <pre className="overflow-x-auto text-sm text-left">
              {`{
  "specialization": [
    "Fullstack",
    "Architecture",
    "Cloud",
    "Mobile"
  ],

  "focus": [
    ".NET",
    "Spring Boot",
    "Web Applications",
    "API Design"
  ],

  "status": "Open To Work"
}`}
            </pre>
          </div>

          <div>
            <span className="text-cyan-400">$</span>{" "}
            <span className="text-slate-300">skills --top</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Skill name=".NET" />
            <Skill name="React" />
            <Skill name="Spring Boot" />
            <Skill name="Angular" />
            <Skill name="Docker" />
            <Skill name="SQL Server" />
          </div>

          <div>
            <span className="text-cyan-400">$</span>{" "}
            <span className="text-white">npm run build</span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillProps {
  name: string;
}

function Skill({ name }: SkillProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2">
      <HugeiconsIcon icon={CheckCircle} size={16} className="text-green-400" />
      <span className="text-slate-300">{name}</span>
    </div>
  );
}
