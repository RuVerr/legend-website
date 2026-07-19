import { createContext } from "react";

import { am } from "@/public/locales/am";

export type Language = "am" | "en" | "ru";

interface LanguageContextProp {
  language: string;
  setLanguage: (language: Language) => void;
  t: typeof am;
}

export const LanguageContext = createContext<LanguageContextProp>({
  language: "am",
  setLanguage: () => {},
  t: am
});
