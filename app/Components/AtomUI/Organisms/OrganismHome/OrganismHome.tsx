import React from "react";
import MoleculesHeader from "../../Molecules/MoleculesHome/MoleculesHeader";
import MoleculesContacts from "../../Molecules/MoleculesHome/MoleculesContacts";
import MoleculesBackground from "../../Molecules/MoleculesBackground/MoleculesBackground";

export default function OrganismHome() {
  return (
    <section className="home">
      <MoleculesBackground/>
      <div className="container">
        <div className="home_content py-[20px] flex justify-end items-center gap-5 h-screen max-[1151px]:flex-col justify-center">
          <MoleculesHeader />
          <MoleculesContacts />
        </div>
      </div>
    </section>
  );
}
