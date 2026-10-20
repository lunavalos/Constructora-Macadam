import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contacto – Constructora MACADAM",
  description:
    "Envíanos un mensaje a través de nuestro formulario de contacto o comunícate al (844) 416 1100. Calle Mariano Abasolo 2300, Guanajuato, 25280 Saltillo, Coah.",
};

export default function ContactoPage() {
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
              Atención directa · Constructora Macadam
            </p>
            <h1 className="hero-enter-title mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl">
              Contacto
            </h1>
            <p className="hero-enter-desc mt-4 text-lg leading-relaxed text-ink-200 sm:text-xl">
              Envíanos un mensaje a través de nuestro formulario de contacto o
              comunícate con nosotros y te atenderemos muy pronto.
            </p>
          </div>
        </div>
      </section>

      <div className="reveal">
        <ContactSection
          id="formulario-contacto"
          eyebrow="Contacto"
          heading="Contáctanos Ahora"
          description="Envíanos un mensaje a través del siguiente formulario de contacto, y te contactaremos muy pronto."
          variant="light"
        />
      </div>

      {/* UBICACIÓN EN SALTILLO */}
      <section className="bg-ink-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-12">
            <div className="reveal-left">
              <div className="max-w-2xl">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  <span
                    aria-hidden="true"
                    className="rule-brand h-px w-8 rounded-full"
                  />
                  Oficinas
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Dónde estamos
                </h2>
              </div>

              <p className="mt-6 text-base font-medium leading-relaxed text-ink-900">
                {siteConfig.legalName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {siteConfig.contact.address}
              </p>
              <p className="mt-2 text-sm text-ink-600">
                Tel:{" "}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="font-semibold text-brand-700 hover:underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>

              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-ink-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:border-gold-400 hover:bg-gold-50 active:scale-[0.98] sm:text-base"
              >
                Ver en Google Maps
              </a>
            </div>

            <div className="reveal-right overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-sm">
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                title="Ubicación de Constructora Macadam en Saltillo, Coahuila"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 sm:h-96"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
