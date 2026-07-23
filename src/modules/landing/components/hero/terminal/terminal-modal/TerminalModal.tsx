import TerminalCommand from "./TerminalCommand";
import TerminalOutput from "./TerminalOutput";
import TerminalAction from "./TerminalAction";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CircleDot,
  Mail01Icon,
  WhatsappIcon,
  XCircle,
} from "@hugeicons/core-free-icons";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TerminalModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm p-4">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-[#0D1117] shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-700 bg-[#161B22] px-5 py-3">
            <div className="flex gap-2">
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
            <span className="text-xs uppercase tracking-widest text-slate-400">
              connection.sh
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 transition hover:text-white"
              aria-label="Cerrar terminal"
            >
              <HugeiconsIcon icon={XCircle} size={18} />
            </button>
          </div>
          <div className="space-y-6 p-8 font-mono">
            <TerminalCommand command="establish_connection" />
            <TerminalOutput>Checking availability...</TerminalOutput>
            <TerminalOutput success>
              Disponible para oportunidades
            </TerminalOutput>
            <TerminalCommand command="communication_channels" />
            <div className="grid gap-4 sm:grid-cols-2">
              <TerminalAction
                icon={<HugeiconsIcon icon={Mail01Icon} size={18} />}
                title="Correo electrónico"
                description="Canal de comunicación de mensajería."
              />
              <TerminalAction
                icon={<HugeiconsIcon icon={WhatsappIcon} size={18} />}
                title="WhatsApp"
                description="Canal de comunicación instantánea."
              />
            </div>
            <TerminalCommand command="status" />
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <p className="text-slate-300">✔ Remoto - Híbrido</p>
              <p className="text-slate-300">✔ Bogotá, Colombia (GMT-5)</p>
              <p className="text-slate-300">
                ✔ Respondo generalmente en menos de 24 horas
              </p>
            </div>
            <div className="pt-2 text-cyan-400">
              $<span className="animate-pulse text-white">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
