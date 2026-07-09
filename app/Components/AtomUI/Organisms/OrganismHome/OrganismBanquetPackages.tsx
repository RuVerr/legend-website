import React from "react";
import MoleculesBanquetCard from "../../Molecules/MoleculesHome/MoleculesBanquetCard";
import MoleculesBanquetHeader from "../../Molecules/MoleculesHome/MoleculesBanquetHeader";

export default function OrganismBanquetPackages() {
  return (
    <div id="banquetID" className="banquet_packages_content">
      <div className="container">
        <MoleculesBanquetHeader />
        <MoleculesBanquetCard />
      </div>
    </div>
  );
}
