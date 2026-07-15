type AvatarProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function AvatarIcon({ children, onClick }: AvatarProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-lg active:scale-90"
      aria-label="Icono Avatar"
    >
      {children}
    </button>
  );
}
