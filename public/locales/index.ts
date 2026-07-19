// import { am } from "./am";
import { am } from "./am";
import { en } from "./en";
import { ru } from "./ru";

export const locales = {
  am,
  en,
  ru
};

export type Language = keyof typeof locales;
export { am, en, ru };
