import React from "react";
import MoleculesHomeOurSpace from "../../Molecules/MoleculesHome/MoleculesHomeOurSpaceHeading";
import MoleculesHomeOurSpaceCard from "../../Molecules/MoleculesHome/MoleculesHomeOurSpaceCard";

export default function OrganismOurSpace() {
//   const cardData = [
//     {
//       title: "Main home",
//       cardImage: [
//         { image: "/images/background/about-us-background.jpg" },
//         { image: "/images/background/about-us-background.jpg" },
//         { image: "/images/background/about-us-background.jpg" },
//         { image: "/images/background/about-us-background.jpg" },
//         { image: "/images/background/about-us-background.jpg" },
//         { image: "/images/background/about-us-background.jpg" }
//       ]
//     }
//   ];
  return (
    <div className="container">
      <div className="our_space_content">
        <MoleculesHomeOurSpace />
        <MoleculesHomeOurSpaceCard />
      </div>
    </div>
  );
}
