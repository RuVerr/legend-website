"use client";
import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";

import { am, en, ru } from "@/public/locales/";

const translation = {
  am,
  en,
  ru
};

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"am" | "en" | "ru">("am");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translation[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}
