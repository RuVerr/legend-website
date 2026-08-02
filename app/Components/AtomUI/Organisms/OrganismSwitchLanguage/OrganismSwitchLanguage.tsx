"use client";

import React from "react";
import MoleculesSwitchLanguage from "../../Molecules/MoleculesSwitchLanguage/MoleculesSwitchLanguage";
import { useLanguage } from "@/app/context/useLanguage";

export default function OrganismSwitchLanguage() {
  const { setLanguage, language } = useLanguage();
  return <MoleculesSwitchLanguage onChangeLanguage={(language) => setLanguage(language)} />;
}
