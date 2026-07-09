import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";
import MoleculesBanquetList from "../../Molecules/MoleculesMenu/MoleculesBanquetList";

import { banquetInfo } from "@/data/menu/banquet-menu.js";

export default function OrganismBanquet() {
  return (
    <div className="banquet">
      <div className="container">
        <div className="banquet_content pt-[190px]">
          <MoleculesMenuHeading
            menuHeading="Լեգենդ ՓԱԹԵԹ"
            menuParagraph="Խնամքով պատրաստված ուտեստներ՝ թարմ և բարձրորակ բաղադրիչներից։"
          />
          <MoleculesBanquetList menuInfo={banquetInfo} />
        </div>
      </div>
    </div>
  );
}
