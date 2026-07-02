import React from "react";
// import OrganismHome from "../Organisms/OrganismHome/OrganismHome";

import dynamic from "next/dynamic";
import OrganismOurSpace from "../Organisms/OrganismHome/OrganismOurSpace";

const OrganismHome = dynamic(() => import("../Organisms/OrganismHome/OrganismHome"), {
  loading: () => <p className="fixed inset-0 z-[10000] w-full h-screen bg-black text-2xl text-black">Loading</p>
});

export default function TemplateHome() {
  return (
    <main>
      <section className="homeHeader">
        <OrganismHome />
      </section>
      <section className="our_space">
        <OrganismOurSpace />
      </section>
    </main>
  );
}
