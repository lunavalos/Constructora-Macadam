import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Proyectos – Constructora MACADAM",
  description:
    "Conoce los proyectos residenciales, campestres e industriales de Constructora Macadam: Villas de la Aurora en Irapuato, Cerrollano en Saltillo, Terreno en venta Agua Nueva y Neopark en Irapuato.",
};

export default function ProyectosPage() {
  const villas = projectsData.find((p) => p.id === "villas-de-la-aurora")!;
  const cerrollano = projectsData.find((p) => p.id === "cerrollano")!;
  const aguanueva = projectsData.find((p) => p.id === "aguanueva")!;
  const terrenos = projectsData.find((p) => p.id === "neopark" || p.id === "terrenosenventa")!;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-brand-950 surface-glow">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/img/pic-banner.jpg"
            className="h-full w-full object-cover opacity-45"
          >
            <source src="/video/clip-1.webm" type="video/webm" />
          </video>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/35"
        />
        <div
          aria-hidden="true"
          className="grain pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44">
            <p className="hero-enter-tag flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span
                aria-hidden="true"
                className="rule-brand h-px w-8 rounded-full"
              />
              Portafolio Constructora Macadam
            </p>
            <h1 className="hero-enter-title mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl">
              Proyectos
            </h1>
            <p className="hero-enter-desc mt-4 text-lg leading-relaxed text-ink-200 sm:text-xl">
              {siteConfig.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 1. VILLAS DE LA AURORA */}
      <section
        id="villas-de-la-aurora"
        className="bg-white py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <div className="reveal-left">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  {villas.category}
                </span>
                <span className="text-xs font-medium text-ink-500">
                  Irapuato, Guanajuato
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {villas.name}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                <p>
                  Ese lugar especial está al alcance de tus manos. Contamos con
                  dos modelos diseñados con un excelente espacio y materiales de
                  alta calidad, ven a conocernos sin compromiso.
                </p>
                <p className="flex items-start gap-2 text-ink-700">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-gold-600"
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
                  <span>
                    Estamos ubicados en{" "}
                    <strong className="font-semibold text-ink-950">
                      Irapuato: Av. Camino Real y Calle Edison, Irapuato Gto,
                      36630
                    </strong>
                    .
                  </span>
                </p>
              </div>

              {villas.specs && (
                <dl className="mt-6 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-ink-50 px-5 py-2">
                  {villas.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-1 gap-1 py-3 text-sm sm:grid-cols-[11rem_1fr] sm:gap-4"
                    >
                      <dt className="text-ink-500">{spec.label}</dt>
                      <dd className="font-medium text-ink-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={villas.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  Visitar sitio web del proyecto
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="reveal-right overflow-hidden rounded-3xl border border-ink-200 bg-ink-100 shadow-lg shadow-brand-950/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={villas.image}
                  alt={villas.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between bg-white px-6 py-4">
                {villas.logo && (
                  <Image
                    src={villas.logo}
                    alt="Logo Villas de la Aurora"
                    width={240}
                    height={80}
                    className="h-14 w-auto object-contain"
                  />
                )}
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Irapuato, Gto.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CERROLLANO */}
      <section id="cerrollano" className="bg-ink-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
            <div className="reveal-left order-2 lg:order-1 overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-lg shadow-brand-950/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={cerrollano.image}
                  alt={cerrollano.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between bg-white px-6 py-4">
                {cerrollano.logo && (
                  <Image
                    src={cerrollano.logo}
                    alt="Logo Cerrollano"
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                )}
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  A 40 min de Saltillo, Coah.
                </span>
              </div>
            </div>

            <div className="reveal-right order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  {cerrollano.category}
                </span>
                <span className="text-xs font-medium text-ink-500">
                  Ejido Santa Teresa de los Muchachos
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {cerrollano.name}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                {cerrollano.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {cerrollano.specs && (
                <dl className="mt-6 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white px-5 py-2">
                  {cerrollano.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-1 gap-1 py-3 text-sm sm:grid-cols-[11rem_1fr] sm:gap-4"
                    >
                      <dt className="text-ink-500">{spec.label}</dt>
                      <dd className="font-medium text-ink-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={cerrollano.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  Visitar sitio web del proyecto
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TERRENO EN VENTA AGUA NUEVA (#aguanueva) */}
      <section id="aguanueva" className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div className="reveal-left">
              <div className="max-w-2xl">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  <span
                    aria-hidden="true"
                    className="rule-brand h-px w-8 rounded-full"
                  />
                  Oportunidad de inversión industrial
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Terreno en venta Agua Nueva
                </h2>
              </div>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                {aguanueva.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={aguanueva.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  Visitar sitio web del proyecto
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-300 bg-white px-6 py-3.5 text-base font-semibold text-brand-900 transition-colors hover:border-gold-400 hover:bg-gold-50"
                >
                  Solicitar más información
                </Link>
              </div>
            </div>

            {/* Ficha Técnica (macadamdesarrollos.com style) */}
            <div className="reveal-right rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8 self-start">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-500">
                Ficha técnica · Agua Nueva
              </h3>
              <dl className="mt-5 divide-y divide-ink-200">
                {aguanueva.specs?.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-2 gap-4 py-3.5 text-sm"
                  >
                    <dt className="text-ink-500">{spec.label}</dt>
                    <dd className="font-medium text-ink-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Galería de Agua Nueva */}
          {aguanueva.gallery && (
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {aguanueva.gallery.map((img, idx) => {
                const delayClass = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300";
                return (
                  <li key={img.src} className={`reveal-scale ${delayClass}`}>
                    <figure className="h-full overflow-hidden rounded-3xl border border-ink-200 bg-ink-100">
                      <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <figcaption className="bg-white px-5 py-3.5 text-sm text-ink-600">
                        {img.caption}
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* 4. NEOPARK (#neopark / #terrenosenventa) */}
      <section
        id="neopark"
        className="relative bg-ink-50 py-14 sm:py-20 lg:py-24"
      >
        <span id="terrenosenventa" className="sr-only" aria-hidden="true" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div className="reveal-left">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <span
                  aria-hidden="true"
                  className="rule-brand h-px w-8 rounded-full"
                />
                Neopark · Parque Industrial en Irapuato
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                ¡Tenemos el terreno ideal para tu proyecto!
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                {terrenos.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={terrenos.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
                >
                  Visitar sitio web del proyecto
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="reveal-right overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-lg shadow-brand-950/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={terrenos.image}
                  alt={terrenos.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-b border-ink-100 bg-white px-6 py-4">
                {terrenos.logo && (
                  <Image
                    src={terrenos.logo}
                    alt={`Logo ${terrenos.name}`}
                    width={180}
                    height={60}
                    className="h-10 w-auto object-contain"
                  />
                )}
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Irapuato, Gto.
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Neopark · Parque industrial con acceso controlado
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Neopark es un parque industrial en La Calera, Irapuato, en pleno corredor industrial del Bajío: la zona con mayor concentración logística y manufacturera entre el centro y el norte del país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
