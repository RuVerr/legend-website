"use client"
import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";
import MoleculesBanquetList from "../../Molecules/MoleculesMenu/MoleculesBanquetList";
import { useLanguage } from "@/app/context/useLanguage";

export default function OrganismBanquet() {
  const { t } = useLanguage();
  return (
    <div className="banquet">
      <div className="container">
        <div className="banquet_content pt-[190px]">
          <MoleculesMenuHeading
            menuHeading={t.banquetPage.menuHeading}
            menuParagraph={t.banquetPage.menuParagraph}
          />
          <MoleculesBanquetList />
        </div>
      </div>
    </div>
  );
}
