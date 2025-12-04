import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(startDate: string): string {
  const date = new Date(startDate);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  return date.toLocaleString("en-US", options);
}

export function sortByPriority<
  T extends { priority: number;[key: string]: any },
>(arr: T[]): T[] {
  return arr.sort((a, b) => a.priority - b.priority);
}

export function breakText(text: string | undefined): string[] {
  if (!text) return [];
  
  return text
    .split(/\r?\n+/)      // Split on newlines
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

