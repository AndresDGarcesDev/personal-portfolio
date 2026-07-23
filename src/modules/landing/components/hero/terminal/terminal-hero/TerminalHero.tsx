import { useRef } from "react";
import { CheckCircle, CircleDot, SquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SkillsDataHero from "./SkillsDataHero";
import { skillsData } from "../../../../data/skills-data";
import { useTerminal } from "../../../../../../shared/animations/hooks/useTerminal";

export default function TerminalHero() {
  const terminalRef = useRef<HTMLDivElement>(null);
  useTerminal(terminalRef);

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-[#0D1117] shadow-2xl">
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
        <span className="text-xs uppercase tracking-wider text-slate-400">
          profile.sh
        </span>
        <HugeiconsIcon
          icon={SquareIcon}
          size={12}
          className="text-transparent"
        />
      </div>
      <div
        ref={terminalRef}
        className="space-y-3 p-6 font-mono text-sm leading-7"
      >
        <div data-terminal-command>
          <span className="text-primary">$</span>{" "}
          <span className="text-text-secondary">whoami</span>
        </div>
        <p data-terminal-output className="text-text-primary">
          Andrés David Garcés Castro
        </p>
        <div data-terminal-command>
          <span className="text-primary">$</span>{" "}
          <span className="text-text-secondary">profile --help</span>
        </div>
        <div
          data-terminal-output
          className="rounded-xl border border-border bg-slate-900 p-4"
        >
          <pre className="overflow-hidden text-left text-sm">
            {[
              "{",
              '  "specialization": [',
              '    "Fullstack",',
              '    "Architecture",',
              '    "Cloud",',
              '    "Mobile"',
              "  ],",
              "",
              '  "focus": [',
              '    "Clean Code",',
              '    "Enterprise Solutions",',
              '    "API Design"',
              "  ],",
              "",
              '  "status": "Open To Work"',
              "}",
            ].map((line, index) => (
              <div key={index} data-terminal-json>
                {line}
              </div>
            ))}
          </pre>
        </div>
        <div data-terminal-command>
          <span className="text-primary">$</span>{" "}
          <span className="text-text-secondary">skills --top</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {skillsData.map((skill) => (
            <SkillsDataHero
              key={skill.name}
              name={skill.name}
              data-terminal-skill
            />
          ))}
        </div>
        <div data-terminal-command>
          <span className="text-primary">$</span>{" "}
          <span className="text-text-secondary">npm run build</span>
        </div>
        <div
          data-terminal-build
          className="inline-flex items-center text-success"
        >
          <HugeiconsIcon icon={CheckCircle} size={16} />
          <span className="ml-2">Portfolio built successfully</span>
        </div>
      </div>
    </div>
  );
}
