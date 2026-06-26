import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";

import { DataMusicHallMenu } from "@/data/menu/music-hall-menu";

export default function OrganismMenu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu_content pt-[190px]">
          <MoleculesMenuHeading
            menuHeading="Մեր Մենյուն"
            menuParagraph="Խնամքով պատրաստված ուտեստներ՝ թարմ և բարձրորակ բաղադրիչներից։"
          />
          <MoleculesMenuList menuInfo={DataMusicHallMenu} />
        </div>
      </div>
    </div>
  );
}
