import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";

export default function OrganismMenu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu_content pt-[190px]">
          <MoleculesMenuHeading />
          <MoleculesMenuList />
        </div>
      </div>
    </div>
  );
}
