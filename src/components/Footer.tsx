import Link from "next/link";
import Image from "next/image";
import { siteConfig, projectsData, servicesData } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  const waHref = whatsappUrl(
    "Hola, me gustaría recibir información sobre Constructora Macadam."
  );

  return (
    <footer className="relative isolate overflow-hidden bg-brand-950 text-ink-300 surface-glow">
      <div aria-hidden="true" className="rule-brand h-0.5 w-full" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/img/logo-b.png"
                alt="Constructora Macadam — Constructora & Inmobiliaria"
                width={220}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
              {siteConfig.descriptor}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              {siteConfig.heroSubtitle}
            </p>
            <ul className="mt-6 flex items-center gap-2.5">
              <li>
                <a
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Constructora Macadam en Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-white/5 hover:text-gold-300 hover:ring-gold-300/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Constructora Macadam en WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-white/5 hover:text-gold-300 hover:ring-gold-300/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Proyectos */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Proyectos
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {projectsData.map((project) => (
                <li key={project.id}>
                  {project.external ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gold-300"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <Link
                      href={project.href}
                      className="transition-colors hover:text-gold-300"
                    >
                      {project.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios y Empresa */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Servicios y Empresa
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-gold-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/nosotros"
                  className="transition-colors hover:text-gold-300"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="transition-colors hover:text-gold-300"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-de-privacidad"
                  className="transition-colors hover:text-gold-300"
                >
                  Aviso de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Contacto
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="transition-colors hover:text-gold-300"
                >
                  Tel. {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300"
                >
                  WhatsApp {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-ink-400 transition-colors hover:text-gold-300"
                >
                  {siteConfig.contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            <Link
              href="/aviso-de-privacidad"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              Aviso de Privacidad
            </Link>{" "}
            · Derechos Reservados Macadam©
          </p>
          <p>
            Creado por{" "}
            <a
              href="https://lunavalos.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-200 transition-colors hover:text-white"
            >
              Lunavalos Digital House
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
