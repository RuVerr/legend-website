import React from "react";
import MoleculesHomeOurSpaceHeading from "../../Molecules/MoleculesHome/MoleculesHomeOurSpaceHeading";
import MoleculesHomeOurSpaceCard from "../../Molecules/MoleculesHome/MoleculesHomeOurSpaceCard";

export default function OrganismOurSpace() {
  return (
    <div className="container">
      <div className="our_space_content">
        <MoleculesHomeOurSpaceHeading />
        <MoleculesHomeOurSpaceCard />
      </div>
    </div>
  );
}
