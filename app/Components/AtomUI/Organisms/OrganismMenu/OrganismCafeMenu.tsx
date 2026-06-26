import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";

import { DataLegendCafeMenu } from "@/data/menu/legend-cafe-menu";

export default function OrganismCafeMenu() {
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
