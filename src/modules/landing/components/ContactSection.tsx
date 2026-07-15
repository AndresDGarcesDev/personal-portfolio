import SectionTitle from "../../../components/ui/title/SectionTitle";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02FreeIcons } from "@hugeicons/core-free-icons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-7xl flex-col justify-center px-6 py-5"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="Contacto" subtitle="Contact" />
        <h2 className="mt-6 text-4xl font-bold text-white">
          ¿Hablamos sobre tu próximo proyecto?
        </h2>
      </div>
      <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="flex items-center gap-2 text-cyan-400 font-semibold">
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              Disponible para nuevas oportunidades
            </span>
            <h3 className="my-5 text-3xl text-center font-bold text-white">
              Siempre abierto a nuevos desafíos.
            </h3>
            <p className="mt-3 px-6 max-w-2xl text-center text-gray-400">
              Si buscas un desarrollador para construir aplicaciones modernas,
              optimizar procesos o liderar el desarrollo de un proyecto, estaré
              encantado de conversar contigo.
            </p>
          </div>
          <a
            href="mailto:andresd.garces01@gmail.com"
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Agendemos una conversación
            <HugeiconsIcon icon={ArrowRight02FreeIcons} size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
