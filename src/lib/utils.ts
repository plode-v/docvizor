import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// convert to ascii for vectorized text
export const convertToAscii = (input: string) => {
  // remove non-ascii characters
  return input.replace(/[^\x00-\x7F]/g, "");
}