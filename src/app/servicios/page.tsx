import type { Metadata } from "next";
import Image from "next/image";
import { servicesData } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servicios – Constructora MACADAM",
  description:
    "¡Descubre cómo podemos hacer realidad el espacio de tus sueños! En nuestro estudio ofrecemos servicios de diseño arquitectónico, construcción de vivienda, diseño en 3D y renderización.",
};

export default function ServiciosPage() {
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
            <source
              src="/video/12067680_1920_1080_60fps.webm"
              type="video/webm"
            />
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
              ¡Descubre cómo podemos hacer realidad el espacio de tus sueños!
            </p>
            <h1 className="hero-enter-title mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl">
              Servicios
            </h1>
            <p className="hero-enter-desc mt-4 text-lg leading-relaxed text-ink-200 sm:text-xl">
              En nuestro estudio ofrecemos servicios de diseño arquitectónico,
              construcción de vivienda, diseño en 3D y renderización.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      {servicesData.map((service, index) => {
        const isEven = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={
              isEven
                ? "bg-ink-50 py-14 sm:py-20 lg:py-24"
                : "bg-white py-14 sm:py-20 lg:py-24"
            }
          >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className={`${isEven ? "lg:order-2 reveal-right" : "reveal-left"}`}>
                  <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                    <span
                      aria-hidden="true"
                      className="rule-brand h-px w-8 rounded-full"
                    />
                    Servicio {service.number}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                    {service.title}
                  </h2>

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                    {service.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={whatsappUrl(
                        `Hola, me interesa el servicio de ${service.title} en Constructora Macadam.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98]"
                    >
                      Solicitar asesoría
                    </a>
                  </div>
                </div>

                <div className={`${isEven ? "lg:order-1 reveal-left" : "reveal-right"}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-ink-200 bg-ink-100 shadow-lg shadow-brand-950/5">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
