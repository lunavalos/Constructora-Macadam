import Image from "next/image";
import Link from "next/link";
import {
  siteConfig,
  projectsData,
  servicesData,
  aboutData,
} from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  const waHref = whatsappUrl(
    "Hola, me gustaría recibir información sobre mis proyectos de construcción con Constructora Macadam."
  );

  return (
    <>
      {/* HERO SECTION (macadamdesarrollos.com style) */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-brand-950">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/img/pic-banner.jpg"
            className="h-full w-full object-cover scale-105"
          >
            <source src="/video/clip-1.webm" type="video/webm" />
          </video>
        </div>
        <div aria-hidden="true" className="hero-veil absolute inset-0" />
        <div
          aria-hidden="true"
          className="grain pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-28 text-center [text-shadow:0_1px_24px_rgba(8,26,43,0.5)] sm:py-32">
            <p className="flex items-center justify-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-white sm:gap-4 sm:text-xs">
              <span
                aria-hidden="true"
                className="rule-brand h-px w-8 rounded-full sm:w-12"
              />
              Desde 1992 · Experiencia en Espacios con Estilo
              <span
                aria-hidden="true"
                className="rule-brand h-px w-8 rounded-full [transform:scaleX(-1)] sm:w-12"
              />
            </p>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.06] text-balance text-white sm:text-5xl lg:text-6xl">
              {siteConfig.heroTitle}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-ink-200 sm:text-xl">
              {siteConfig.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
              >
                Contáctanos
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:border-white hover:bg-white hover:text-brand-950 active:scale-[0.98]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS SECTION */}
      <section id="proyectos" className="bg-ink-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Proyectos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                {siteConfig.heroSubtitle}
              </p>
            </div>
            <Link
              href="/proyectos"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              Ver detalle de proyectos
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectsData.map((project) => {
              const CardWrapper = project.external ? "a" : Link;
              const wrapperProps = project.external
                ? {
                    href: project.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: project.href };

              return (
                <CardWrapper
                  key={project.id}
                  {...wrapperProps}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-950/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {project.logo && (
                      <span className="mb-4 flex h-14 items-center">
                        <Image
                          src={project.logo}
                          alt={`Logo de ${project.name}`}
                          width={260}
                          height={86}
                          className={
                            project.id === "villas-de-la-aurora"
                              ? "h-14 w-auto max-w-[13.5rem] object-contain object-left"
                              : "max-h-10 w-auto max-w-[10.5rem] object-contain object-left"
                          }
                        />
                      </span>
                    )}
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink-950 transition-colors group-hover:text-brand-700">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 flex items-start gap-1.5 text-xs text-ink-500">
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <span>{project.location}</span>
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                      {project.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Información
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSTRUCTORA MACADAM (NOSOTROS RESUMEN) SECTION */}
      <section id="nosotros" className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div>
              <div className="max-w-2xl">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  <span
                    aria-hidden="true"
                    className="rule-brand h-px w-8 rounded-full"
                  />
                  {aboutData.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Constructora {aboutData.title}
                </h2>
              </div>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                {aboutData.summaryParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/nosotros"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  Conocer más
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Video & Visual Card */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-ink-200 bg-brand-950 shadow-xl shadow-brand-950/10">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/img/pic-banner.jpg"
                    className="h-full w-full object-cover"
                  >
                    <source
                      src="/video/12067680_1920_1080_60fps.webm"
                      type="video/webm"
                    />
                  </video>
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-brand-950/60 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-inset ring-white/15 backdrop-blur-md">
                      Constructora & Inmobiliaria
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER WITH SECOND VIDEO */}
      <section className="relative isolate overflow-hidden bg-brand-950 py-16 text-white surface-glow sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-35"
          >
            <source
              src="/video/14214118_1440_2560_60fps.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div aria-hidden="true" className="hero-veil absolute inset-0" />
        <div
          aria-hidden="true"
          className="grain pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            <span
              aria-hidden="true"
              className="rule-brand h-px w-8 rounded-full"
            />
            Constructora Macadam
            <span
              aria-hidden="true"
              className="rule-brand h-px w-8 rounded-full [transform:scaleX(-1)]"
            />
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance text-white sm:text-4xl lg:text-5xl">
            ¡Construye tu futuro con nosotros!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Contáctanos hoy mismo y comienza a hacer realidad tus proyectos de
            construcción.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-brand-950 shadow-sm transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-[#1fb356] active:scale-[0.98]"
            >
              WhatsApp
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:border-white hover:bg-white hover:text-brand-950 active:scale-[0.98]"
            >
              Conocer servicios
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="bg-ink-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <span
                  aria-hidden="true"
                  className="rule-brand h-px w-8 rounded-full"
                />
                Estudio y Construcción
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Servicios
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                En nuestro estudio ofrecemos servicios de diseño arquitectónico,
                construcción de vivienda, diseño en 3D y renderización.
              </p>
            </div>
            <Link
              href="/servicios"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              Ver detalle de servicios
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-950/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                    Servicio {service.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="rule-brand block h-1 w-10 rounded-full transition-all duration-300 group-hover:w-14"
                  />
                </div>

                <div className="relative my-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-ink-950 transition-colors group-hover:text-brand-700">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                  {service.shortDescription}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Info
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <ContactSection />
    </>
  );
}
