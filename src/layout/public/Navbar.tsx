import { useState } from "react";
import { useNavbarActiveSection } from "../../shared/hooks/useNavbarActiveSection";
import { navbarItems } from "../../modules/landing/data/navbar-items";
import { useNavbarScroll } from "../../shared/hooks/useNavbarScroll";
import { useTheme } from "../../shared/hooks/useTheme";
import AvatarIcon from "../../components/ui/avatar/AvatarIcon";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Menu03Icon,
  Moon02Icon,
  Sun01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useNavbarActiveSection([
    "hero",
    "about",
    "technologies",
    "experiences",
    "educations",
    "contact",
  ]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useNavbarScroll() ? "bg-slate-800/40 backdrop-blur-md shadow-lg text-white" : "bg-transparent text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="text-center justify-center">
            <p className="text-xl">Andrés Garcés</p>
            <span className="text-lg">Software Developer</span>
          </div>
          <div className="hidden md:flex items-center gap-8 border rounded-4xl px-5 py-1">
            {navbarItems.map((item) => {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? "text-gray-300 underline"
                      : "hover:text-gray-400"
                  } inline-flex items-center px-1`}
                >
                  {item.icon && <HugeiconsIcon icon={item.icon} size={19} />}
                  <p className="pl-1">{item.label}</p>
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-3 py-3">
            <AvatarIcon onClick={toggleTheme}>
              {theme === "dark" ? (
                <HugeiconsIcon icon={Sun01FreeIcons} size={22} />
              ) : (
                <HugeiconsIcon icon={Moon02Icon} size={22} />
              )}
            </AvatarIcon>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Abrir menú"
            >
              {isOpen ? (
                <HugeiconsIcon icon={Cancel01Icon} />
              ) : (
                <HugeiconsIcon icon={Menu03Icon} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-125" : "max-h-0"}`}
      >
        <div className="bg-slate-900 text-white border-t border-slate-800">
          <div className="flex flex-col p-6 gap-5">
            {navbarItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
