import { CheckCircle } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface Props {
  children: React.ReactNode;
  success?: boolean;
}

export default function TerminalOutput({ children, success }: Props) {
  if (success) {
    return (
      <div className="flex items-center gap-2">
        <HugeiconsIcon
          icon={CheckCircle}
          size={16}
          className="text-green-400"
        />
        <span className="text-green-300">{children}</span>
      </div>
    );
  }

  return <p className="pl-6 text-slate-300">{children}</p>;
}
