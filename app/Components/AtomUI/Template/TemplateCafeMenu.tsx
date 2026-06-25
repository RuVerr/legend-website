import React from "react";

import dynamic from "next/dynamic";

const OrganismCafeMenu = dynamic(() => import("../Organisms/OrganismMenu/OrganismCafeMenu"), {
  loading: () => <p>Loading</p>
});

export default function TemplateCafeMenu() {
  return (
    <main>
      <OrganismCafeMenu />
    </main>
  );
}
