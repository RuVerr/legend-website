"use client";
import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";

import { en, ru } from "@/public/locales";

const translation = {
  en,
  ru
};

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ru">("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translation[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}
