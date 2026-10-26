import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "./site-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber || "525661339770"}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
