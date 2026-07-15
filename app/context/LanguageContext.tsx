import { createContext } from "react";

import { en } from "@/public/locales/en";

export type Language = "en" | "ru";

interface LanguageContextProp {
  language: string;
  setLanguage: (language: Language) => void;
  t: typeof en;
}

export const LanguageContext = createContext<LanguageContextProp>({
  language: "en",
  setLanguage: () => {},
  t: en
});
