import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Preloader } from "@/components/Preloader";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Constructora MACADAM – Experiencia en Espacios con Estilo",
  description:
    "Desde 1992 en Saltillo, Coahuila. Nos especializamos en el diseño y construcción de casas habitación, bodegas y plazas comerciales, diseño arquitectónico, diseño en 3D y desarrollo inmobiliario en Coahuila y Guanajuato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="flex min-h-screen flex-col bg-white text-ink-950 antialiased selection:bg-brand-500 selection:text-white">
        <Preloader />
        <ScrollAnimationProvider />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Ir al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
