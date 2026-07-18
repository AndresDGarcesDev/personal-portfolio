interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TerminalAction({ icon, title, description }: Props) {
  return (
    <button
      className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-left transition hover:border-cyan-500 hover:bg-slate-800"
      aria-label="Close terminal"
    >
      <div className="mb-3 flex items-center gap-3 text-cyan-400">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <p className="text-sm text-slate-400">{description}</p>
    </button>
  );
}
