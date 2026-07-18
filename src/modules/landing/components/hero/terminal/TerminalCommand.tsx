interface Props {
  command: string;
}

export default function TerminalCommand({ command }: Props) {
  return (
    <div className="flex gap-2">
      <span className="text-cyan-400">$</span>
      <span className="text-slate-300">{command}</span>
    </div>
  );
}
