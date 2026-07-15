// import { am } from "./am";
import { en } from "./en";
import { ru } from "./ru";

export const locales = {
  en,
  ru
};

export type Language = keyof typeof locales;
export { en, ru };
