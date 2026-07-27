"use client"
import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";

// import { DataLegendCafeMenu } from "@/data/menu/legend-cafe-menu";
import { useLanguage } from "@/app/context/useLanguage";

export default function OrganismCafeMenu() {
  const { t } = useLanguage();
  const DataLegendCafeMenu = t.cafeMenuPage.DataLegendCafeMenu
  return (
    <div className="menu">
      <div className="container">
        <div className="menu_content pt-[190px]">
          <MoleculesMenuHeading
            menuHeading="Լեգենդ Սրճարան"
            menuParagraph="Խնամքով պատրաստված ուտեստներ՝ թարմ և բարձրորակ բաղադրիչներից։"
          />
          <MoleculesMenuList menuInfo={DataLegendCafeMenu} />
        </div>
      </div>
    </div>
  );
}
