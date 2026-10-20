"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn, whatsappUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site-data";

const DARK_HERO_PATHS = new Set(["/", "/nosotros", "/proyectos", "/servicios", "/contacto"]);

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (first && last) {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openBtnRef.current?.focus();
    };
  }, [menuOpen]);

  const hasDarkHero = DARK_HERO_PATHS.has(pathname);
  const isTransparent = hasDarkHero && !scrolled;
  const waHref = whatsappUrl(
    "Hola, me gustaría recibir información sobre Constructora Macadam."
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          isTransparent
            ? "border-transparent bg-transparent"
            : "border-ink-200/70 bg-white/85 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-[height] duration-300",
              scrolled ? "h-16 lg:h-[4.5rem]" : "h-20 lg:h-24"
            )}
          >
            {/* 1. Left: Official Logo */}
            <Link
              href="/"
              aria-label={`${siteConfig.name} — inicio`}
              className="rounded-sm transition-opacity hover:opacity-80"
            >
              <Image
                src={isTransparent ? "/img/logo-b.png" : "/img/logo-o.png"}
                alt="Constructora Macadam — Constructora & Inmobiliaria"
                width={220}
                height={45}
                priority
                className={cn(
                  "w-auto object-contain transition-[height] duration-300",
                  scrolled ? "h-7 sm:h-8" : "h-8 sm:h-10"
                )}
              />
            </Link>

            {/* 2. Right: Normal Navigation (Desktop) */}
            <nav
              aria-label="Navegación principal"
              className="hidden lg:flex items-center gap-7 xl:gap-9"
            >
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.2em] transition-colors",
                      isTransparent
                        ? active
                          ? "text-gold-300"
                          : "text-white/85 hover:text-gold-300"
                        : active
                        ? "text-brand-700"
                        : "text-ink-700 hover:text-brand-700"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Hamburger button ONLY on mobile (< lg) */}
            <button
              ref={openBtnRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="menu-principal"
              className={cn(
                "group -mr-2 flex lg:hidden items-center gap-2.5 rounded-full px-2 py-3 transition-colors sm:px-3 cursor-pointer",
                isTransparent
                  ? "text-white hover:text-gold-300"
                  : "text-ink-900 hover:text-brand-700"
              )}
            >
              <span
                aria-hidden="true"
                className="flex w-6 flex-col items-end gap-[7px]"
              >
                <span className="h-px w-6 bg-current transition-[width] duration-300" />
                <span className="h-px w-4 bg-current transition-[width] duration-300 group-hover:w-6" />
              </span>
              <span className="sr-only">Abrir menú</span>
            </button>
          </div>
        </div>
      </header>

      {!hasDarkHero && (
        <div aria-hidden="true" className="h-20 lg:h-24" />
      )}

      {/* Fullscreen Navigation Modal (Mobile only) */}
      {menuOpen && (
        <div
          ref={dialogRef}
          id="menu-principal"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación principal"
          className="animate-fade-in scrollbar-hidden fixed inset-0 z-[70] overflow-y-auto bg-brand-950 surface-glow text-white lg:hidden"
        >
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
            <div className="flex h-20 items-center justify-between">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="justify-self-start"
              >
                <Image
                  src="/img/logo-b.png"
                  alt="Constructora Macadam"
                  width={220}
                  height={45}
                  className="h-8 w-auto object-contain sm:h-10"
                />
              </Link>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                className="-mr-2 flex items-center gap-2 rounded-full px-2 py-3 text-white transition-colors hover:text-gold-300 sm:px-3 cursor-pointer"
              >
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em]">
                  Cerrar
                </span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.25}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Navegación móvil"
              className="pb-16 pt-6"
            >
              <ul className="border-t border-white/10">
                {siteConfig.nav.map((item, idx) => {
                  const isCurrent = pathname === item.href;
                  return (
                    <li
                      key={item.href}
                      className="animate-rise-in border-b border-white/10"
                      style={{ animationDelay: `${40 + 45 * idx}ms` }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isCurrent ? "page" : undefined}
                        className="group flex items-baseline gap-4 py-4 sm:gap-6 sm:py-5"
                      >
                        <span className="w-6 shrink-0 text-[0.6875rem] font-semibold tabular-nums tracking-[0.18em] text-white/35 transition-colors group-hover:text-gold-300">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-2xl font-medium leading-tight tracking-tight transition-[color,transform] duration-300 group-hover:translate-x-1.5 sm:text-3xl",
                            isCurrent
                              ? "text-gold-300"
                              : "text-white/85 group-hover:text-white"
                          )}
                        >
                          {item.label}
                        </span>
                        {item.meta && (
                          <span className="ml-auto hidden text-right text-xs text-ink-400 transition-colors group-hover:text-ink-300 sm:block">
                            {item.meta}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div
                className="animate-rise-in mt-10 grid gap-8"
                style={{
                  animationDelay: `${40 + 45 * siteConfig.nav.length}ms`,
                }}
              >
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between gap-6 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-gold-300"
                >
                  <span className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-emerald-600 transition-colors group-hover:text-ink-950"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z" />
                    </svg>
                    Escríbenos por WhatsApp
                  </span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"
                    />
                  </svg>
                </a>

                <div className="text-sm text-ink-400">
                  <p className="text-white/80">{siteConfig.descriptor}</p>
                  <p className="mt-1.5">
                    Tel. {siteConfig.contact.phoneDisplay} · WhatsApp{" "}
                    {siteConfig.contact.whatsappDisplay}
                  </p>
                  <p>{siteConfig.contact.address}</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
