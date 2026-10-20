import type { Metadata } from "next";
import { aboutData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Nosotros – Constructora MACADAM",
  description:
    "Conoce la historia, misión, visión y valores de Constructora Macadam, S.A. de C.V. Desde 1992 en Saltillo, Coahuila y actualmente también en Guanajuato.",
};

export default function NosotrosPage() {
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
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span
                aria-hidden="true"
                className="rule-brand h-px w-8 rounded-full"
              />
              Desde 1992 · Saltillo, Coahuila
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl">
              Nosotros
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-200 sm:text-xl">
              Consolidados en 1997 como Constructora Macadam, S.A. de C.V.,
              brindando soluciones integrales de construcción e inmobiliaria en
              Coahuila y Guanajuato.
            </p>
          </div>
        </div>
      </section>

      {/* CONSTRUCTORA MACADAM SECTION (Exacta como estaba en el index) */}
      <section id="constructora-macadam" className="bg-white py-14 sm:py-20 lg:py-24">
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
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Sectors & Real Estate Services */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink-200 bg-ink-50 p-5">
                  <span
                    aria-hidden="true"
                    className="rule-brand block h-1 w-8 rounded-full"
                  />
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-950">
                    Experiencia en Obra Civil
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-600">
                    {aboutData.sectors.map((sector) => (
                      <li key={sector} className="flex items-center gap-2.5">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                        />
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-ink-200 bg-ink-50 p-5">
                  <span
                    aria-hidden="true"
                    className="rule-brand block h-1 w-8 rounded-full"
                  />
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-950">
                    Ramo Inmobiliario
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-600">
                    {aboutData.realEstateServices.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

      {/* MISIÓN, VISIÓN Y VALORES SECTION (Exacta como estaba en el index) */}
      <section id="valores" className="bg-ink-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Misión y Visión */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-ink-200 bg-white p-7 sm:p-9">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <span
                  aria-hidden="true"
                  className="rule-brand h-px w-8 rounded-full"
                />
                Propósito
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-950 sm:text-3xl">
                {aboutData.mision.title}
              </h2>
              <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-ink-600 sm:text-base">
                {aboutData.mision.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-ink-200 bg-white p-7 sm:p-9">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <span
                  aria-hidden="true"
                  className="rule-brand h-px w-8 rounded-full"
                />
                Rumbo
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-950 sm:text-3xl">
                {aboutData.vision.title}
              </h2>
              <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-ink-600 sm:text-base">
                {aboutData.vision.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-16 lg:mt-20">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <span
                  aria-hidden="true"
                  className="rule-brand h-px w-8 rounded-full"
                />
                Cultura empresarial
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Valores
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                {aboutData.valoresIntro}
              </p>
            </div>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aboutData.valores.map((valor) => (
                <li
                  key={valor.title}
                  className="group rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-950/5"
                >
                  <span
                    aria-hidden="true"
                    className="rule-brand block h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12"
                  />
                  <h3 className="mt-4 text-base font-semibold text-ink-950">
                    {valor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {valor.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
