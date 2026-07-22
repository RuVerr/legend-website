import React from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";
import MoleculesBanquetList from "../../Molecules/MoleculesMenu/MoleculesBanquetList";

export default function OrganismBanquet() {
  return (
    <div className="banquet">
      <div className="container">
        <div className="banquet_content pt-[190px]">
          <MoleculesMenuHeading />
          <MoleculesBanquetList />
        </div>
      </div>
    </div>
  );
}
