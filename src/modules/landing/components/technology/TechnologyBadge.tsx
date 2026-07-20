type TechnologyBadgeVariant =
  | "professional"
  | "avanzado"
  | "learning"
  | "current"
  | "favorite";

interface Props {
  children: React.ReactNode;
  variant: TechnologyBadgeVariant;
}

export default function TechnologyBadge({ children }: Props) {
  return <span className="text-text-primary">{children}</span>;
}
