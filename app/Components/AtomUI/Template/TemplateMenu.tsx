import React from "react";

import dynamic from "next/dynamic";

const OrganismMenu = dynamic(() => import("../Organisms/OrganismMenu/OrganismMenu"), {
  loading: () => <p className="fixed inset-0 z-[10000] w-full h-screen bg-black text-2xl text-black">Loading</p>
});

export default function TemplateMenu() {
  return (
    <main>
      <OrganismMenu />
    </main>
  );
}
