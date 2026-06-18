import React from "react";
import OrganismNavigation from "../Organisms/OrganismNavigation/OrganismNavigation";

export default function TemplateNavigation() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-[1000] max-[620px]:hidden">
      <OrganismNavigation />
    </nav>
  );
}
