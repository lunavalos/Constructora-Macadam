"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { siteConfig } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/utils";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function ContactSection({
  id = "contacto",
  eyebrow = "Contacto",
  heading = "Contáctanos Ahora",
  description = "Envíanos un mensaje a través del siguiente formulario de contacto, y te contactaremos muy pronto.",
  variant = "dark",
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  variant?: "dark" | "light";
}) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [interes, setInteres] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      let recaptchaToken = "";
      if (
        recaptchaSiteKey &&
        typeof window !== "undefined" &&
        window.grecaptcha
      ) {
        try {
          await new Promise<void>((resolve) => {
            window.grecaptcha?.ready(() => resolve());
          });
          recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, {
            action: "contacto",
          });
        } catch (tokenErr) {
          console.warn("No se pudo obtener el token de reCAPTCHA:", tokenErr);
        }
      }

      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          interes,
          mensaje,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar el mensaje.");
      }

      setStatus("success");
      setNombre("");
      setEmail("");
      setTelefono("");
      setInteres("");
      setMensaje("");
    } catch (err: unknown) {
      console.error("Error al enviar formulario:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el mensaje. Por favor intenta de nuevo o escríbenos directamente por WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const directWa = whatsappUrl(
    "Hola, me gustaría recibir información sobre sus servicios de construcción y proyectos inmobiliarios."
  );

  const isLight = variant === "light";

  return (
    <section
      id={id}
      className={
        isLight
          ? "relative isolate overflow-hidden bg-white py-14 text-ink-950 sm:py-20 lg:py-24"
          : "relative isolate overflow-hidden bg-brand-950 py-14 text-white surface-glow sm:py-20 lg:py-24"
      }
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="max-w-2xl">
                <p
                  className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                    isLight ? "text-brand-600" : "text-white"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="rule-brand h-px w-8 rounded-full"
                  />
                  {eyebrow}
                </p>
                <h2
                  className={`mt-3 text-3xl font-semibold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
                    isLight ? "text-ink-950" : "text-white"
                  }`}
                >
                  {heading}
                </h2>
                <p
                  className={`mt-4 text-base leading-relaxed sm:text-lg ${
                    isLight ? "text-ink-600" : "text-ink-300"
                  }`}
                >
                  {description}
                </p>
              </div>

              <div className="mt-8">
                <Image
                  src={isLight ? "/img/logo-o.png" : "/img/logo-b.png"}
                  alt="Constructora Macadam"
                  width={200}
                  height={42}
                  className="h-8 w-auto object-contain opacity-90"
                />
              </div>

              <ul
                className={`mt-8 space-y-4 text-sm sm:text-base ${
                  isLight ? "text-ink-700" : "text-ink-200"
                }`}
              >
                <li>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className={`group inline-flex items-center gap-3.5 transition-colors ${
                      isLight ? "hover:text-brand-700" : "hover:text-gold-300"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isLight
                          ? "border-ink-200 bg-ink-50 text-brand-600 group-hover:border-brand-300 group-hover:bg-brand-50"
                          : "border-white/15 bg-white/5 text-gold-300 group-hover:border-gold-400/50 group-hover:bg-gold-500/10"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </span>
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className={`group inline-flex items-center gap-3.5 transition-colors ${
                      isLight ? "hover:text-brand-700" : "hover:text-gold-300"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isLight
                          ? "border-ink-200 bg-ink-50 text-brand-600 group-hover:border-brand-300 group-hover:bg-brand-50"
                          : "border-white/15 bg-white/5 text-gold-300 group-hover:border-gold-400/50 group-hover:bg-gold-500/10"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </li>

                <li>
                  <a
                    href={siteConfig.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-start gap-3.5 transition-colors ${
                      isLight ? "hover:text-brand-700" : "hover:text-gold-300"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isLight
                          ? "border-ink-200 bg-ink-50 text-brand-600 group-hover:border-brand-300 group-hover:bg-brand-50"
                          : "border-white/15 bg-white/5 text-gold-300 group-hover:border-gold-400/50 group-hover:bg-gold-500/10"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
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
                    </span>
                    <span className="mt-2 leading-relaxed">
                      {siteConfig.contact.address}
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={directWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-brand-950 shadow-sm transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-[#1fb356] active:scale-[0.98]"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Form */}
          <div
            className={
              isLight
                ? "rounded-3xl border border-ink-200 bg-ink-50 p-6 shadow-sm sm:p-8"
                : "rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
            }
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contacto-nombre"
                  className={`block text-sm font-medium ${
                    isLight ? "text-ink-800" : "text-ink-200"
                  }`}
                >
                  Nombre
                </label>
                <input
                  id="contacto-nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className={
                    isLight
                      ? "mt-1.5 w-full rounded-xl border border-ink-300 bg-white px-4 py-2.5 text-base text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-600"
                      : "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-base text-white outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:bg-white/10"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-email"
                  className={`block text-sm font-medium ${
                    isLight ? "text-ink-800" : "text-ink-200"
                  }`}
                >
                  Correo electrónico
                </label>
                <input
                  id="contacto-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className={
                    isLight
                      ? "mt-1.5 w-full rounded-xl border border-ink-300 bg-white px-4 py-2.5 text-base text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-600"
                      : "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-base text-white outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:bg-white/10"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-telefono"
                  className={`block text-sm font-medium ${
                    isLight ? "text-ink-800" : "text-ink-200"
                  }`}
                >
                  Teléfono
                </label>
                <input
                  id="contacto-telefono"
                  name="telefono"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="10 dígitos"
                  className={
                    isLight
                      ? "mt-1.5 w-full rounded-xl border border-ink-300 bg-white px-4 py-2.5 text-base text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-600"
                      : "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-base text-white outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:bg-white/10"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-interes"
                  className={`block text-sm font-medium ${
                    isLight ? "text-ink-800" : "text-ink-200"
                  }`}
                >
                  ¿Qué servicio o proyecto te interesa?{" "}
                  <span className={isLight ? "text-ink-500" : "text-ink-300"}>
                    (opcional)
                  </span>
                </label>
                <select
                  id="contacto-interes"
                  name="interes"
                  value={interes}
                  onChange={(e) => setInteres(e.target.value)}
                  className={
                    isLight
                      ? "mt-1.5 w-full appearance-none rounded-xl border border-ink-300 bg-white px-4 py-2.5 pr-10 text-base text-ink-950 outline-none transition-colors focus:border-brand-600"
                      : "mt-1.5 w-full appearance-none rounded-xl border border-white/15 bg-brand-950/90 px-4 py-2.5 pr-10 text-base text-white outline-none transition-colors focus:border-brand-400"
                  }
                >
                  <option value="">Selecciona una opción</option>
                  <optgroup label="Servicios">
                    <option value="Diseño arquitectónico">
                      Diseño arquitectónico
                    </option>
                    <option value="Diseño en 3D y renderización">
                      Diseño en 3D y renderización
                    </option>
                    <option value="Construcción de vivienda">
                      Construcción de vivienda
                    </option>
                  </optgroup>
                  <optgroup label="Proyectos">
                    <option value="Villas de la Aurora (Irapuato, Gto.)">
                      Villas de la Aurora — Fraccionamiento residencial
                    </option>
                    <option value="Agua Nueva (Derramadero, Saltillo)">
                      Agua Nueva — Terrenos industriales en venta
                    </option>
                    <option value="Cerrollano (Saltillo, Coah.)">
                      Cerrollano — Fraccionamiento campestre
                    </option>
                    <option value="Neopark (Irapuato, Gto.)">
                      Neopark — Terrenos industriales, residenciales y campestres
                    </option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contacto-mensaje"
                  className={`block text-sm font-medium ${
                    isLight ? "text-ink-800" : "text-ink-200"
                  }`}
                >
                  Mensaje
                </label>
                <textarea
                  id="contacto-mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos sobre tu proyecto o consulta"
                  className={
                    isLight
                      ? "mt-1.5 w-full resize-y rounded-xl border border-ink-300 bg-white px-4 py-2.5 text-base text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-600"
                      : "mt-1.5 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-base text-white outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:bg-white/10"
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-950/20 transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:bg-gold-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </>
                )}
              </button>

              {status === "success" && (
                <div
                  role="status"
                  className={
                    isLight
                      ? "rounded-2xl border border-emerald-600/30 bg-emerald-50 p-4 text-emerald-900 animate-fade-in"
                      : "rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-200 animate-fade-in"
                  }
                >
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold">
                        ¡Mensaje enviado con éxito!
                      </p>
                      <p className="mt-1 text-xs leading-relaxed opacity-90">
                        Hemos recibido tu solicitud y un asesor de Constructora Macadam se pondrá en contacto contigo a la brevedad.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className={
                    isLight
                      ? "rounded-2xl border border-rose-600/30 bg-rose-50 p-4 text-rose-900 animate-fade-in"
                      : "rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-rose-200 animate-fade-in"
                  }
                >
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-rose-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold">
                        No se pudo enviar el mensaje
                      </p>
                      <p className="mt-1 text-xs leading-relaxed opacity-90">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <p
                className={`text-xs leading-relaxed ${
                  isLight ? "text-ink-500" : "text-ink-300"
                }`}
              >
                Al enviar aceptas el tratamiento de tus datos conforme a nuestro{" "}
                <Link
                  href="/aviso-de-privacidad"
                  className={
                    isLight
                      ? "font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
                      : "font-medium text-ink-200 underline underline-offset-2 hover:text-white"
                  }
                >
                  Aviso de Privacidad
                </Link>
                .
              </p>

              <p
                className={`text-[0.6875rem] leading-relaxed ${
                  isLight ? "text-ink-400" : "text-ink-400"
                }`}
              >
                Protegido por Google reCAPTCHA. Aplican la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isLight
                      ? "underline hover:text-brand-700"
                      : "underline hover:text-white"
                  }
                >
                  Política de Privacidad
                </a>{" "}
                y los{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isLight
                      ? "underline hover:text-brand-700"
                      : "underline hover:text-white"
                  }
                >
                  Términos del Servicio
                </a>{" "}
                de Google.
              </p>
            </form>
          </div>
        </div>
      </div>

      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="lazyOnload"
        />
      )}
    </section>
  );
}
