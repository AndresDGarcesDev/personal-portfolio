export default function Copyright() {
  return (
    <div className="border-t py-3 px-4 text-sm mx-auto max-w-7xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
        <p>
          Portafolio construido con React • TypeScript • Vite • Tailwind CSS y
          GSAP
        </p>
        <p>
          ©{" "}
          <span className="font-bold">
            {new Date().getFullYear()} Andrés Garcés.
          </span>{" "}
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
