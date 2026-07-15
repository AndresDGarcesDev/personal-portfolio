import SectionTitle from "../../../components/ui/title/SectionTitle";
import AboutCard from "./about/AboutCard";
import {
  CodeXmlIcon,
  Database01Icon,
  MobileProgramming01Icon,
  CloudServerIcon,
  LayersLogoIcon,
  LaptopPerformanceIcon,
} from "@hugeicons/core-free-icons";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle title="Sobre mí" subtitle="About me" />
      <div className="grid gap-20 lg:grid-cols-2">
        <div>
          <h3 className="mt-4 pb-10 text-5xl font-bold text-white">
            Construyo software pensado para crecer.
          </h3>
          <p className="pt-2 text-lg leading-8 text-gray-200">
            Soy desarrollador Full Stack con experiencia en el desarrollo de
            aplicaciones web, móviles y servicios backend escalables.
          </p>
          <p className="py-2 text-lg leading-8 text-gray-200">
            Me enfoco en crear soluciones mantenibles, optimizadas y alineadas
            con las necesidades del negocio utilizando tecnologías modernas como
            .NET, Spring Boot, React, Angular y React Native. Disfruto diseñar
            arquitecturas limpias, optimizar rendimiento y aprender
            continuamente nuevas tecnologías para ofrecer productos de alta
            calidad.
          </p>
          <hr />
          <p className="pt-2 text-lg leading-8 text-gray-400/95">
            "Mi objetivo no es solamente escribir código. Busco diseñar software
            que sea escalable, mantenible y que genere valor para las personas
            que lo utilizan."
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <AboutCard
            icon={CodeXmlIcon}
            title="Frontend"
            text="React, Angular y experiencias modernas."
          />
          <AboutCard
            icon={Database01Icon}
            title="Backend"
            text=".NET, Spring Boot y APIs REST."
          />
          <AboutCard
            icon={MobileProgramming01Icon}
            title="Mobile"
            text="React Native para Android e iOS."
          />
          <AboutCard
            icon={LayersLogoIcon}
            title="Arquitectura"
            text="Clean Architecture y Microservicios."
          />
          <AboutCard
            icon={CloudServerIcon}
            title="Cloud"
            text="Docker y Google Cloud."
          />
          <AboutCard
            icon={LaptopPerformanceIcon}
            title="Performance"
            text="Aplicaciones rápidas y escalables."
          />
        </div>
      </div>
    </section>
  );
}
