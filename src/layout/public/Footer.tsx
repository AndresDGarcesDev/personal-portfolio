import {
  Github,
  Linkedin,
  Mail01Icon,
  MapPin,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mt-3 grid gap-12 border-t border-gray-800 pt-12 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Andrés Garcés</h3>
            <p className="mt-4 text-gray-400 leading-7">
              Full Stack Developer especializado en construir aplicaciones
              modernas utilizando .NET, Java, React, Angular, React Native y
              arquitecturas escalables.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-xl text-white font-bold">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={Mail01Icon} size={18} />
                andresd.garces01@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={MapPin} size={18} />
                Bogotá, Colombia
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xl text-white font-bold">Redes</h3>
            <div className="flex gap-5">
              <a
                href="https://github.com/AndresDGarcesDev"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-700 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <HugeiconsIcon icon={Github} />
              </a>
              <a
                href="https://www.linkedin.com/in/andres-david-garces-castro/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-700 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <HugeiconsIcon icon={Linkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
