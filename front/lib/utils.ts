import { type ClassValue, clsx } from "clsx"
import { stringOrDate } from "react-big-calendar";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat("en-US", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date))
}

export const toSqlFormat = (date: stringOrDate) => (new Date(date)).toISOString().slice(0, 19).replace('T', ' ');

export const langvalues = {
  "France": {
    "fr-Fr": "Français",
  },
  "United States": {
    "en-US": "English"
  }
}
export type lang = "fr-Fr" | "en-US";