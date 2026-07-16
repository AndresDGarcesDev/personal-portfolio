import type React from "react";

type BadgeVariant = "default" | "success" | "danger" | "warning" | "info";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-800 bg-gray-200 rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
