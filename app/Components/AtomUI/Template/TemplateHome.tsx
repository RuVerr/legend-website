import React from "react";
// import OrganismHome from "../Organisms/OrganismHome/OrganismHome";

import dynamic from "next/dynamic";
import OrganismOurSpace from "../Organisms/OrganismHome/OrganismOurSpace";
import OrganismBanquetPackages from "../Organisms/OrganismHome/OrganismBanquetPackages";

const OrganismHome = dynamic(() => import("../Organisms/OrganismHome/OrganismHomeHeader"), {
  loading: () => <p className="fixed inset-0 z-[10000] w-full h-screen bg-black text-2xl text-black">Loading</p>
});

export default function TemplateHome() {
  return (
    <main>
      <div className="home_content py-[100px]">
        <section className="homeHeader">
          <OrganismHome />
        </section>
        <section className="our_space">
          <OrganismOurSpace />
        </section>
        <section>
          <OrganismBanquetPackages />
        </section>
      </div>
    </main>
  );
}
