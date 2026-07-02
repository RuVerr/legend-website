"use client";
import React, { useLayoutEffect, useRef } from "react";
import MoleculesMenuHeading from "../../Molecules/MoleculesMenu/MoleculesMenuHeading";
import MoleculesMenuList from "../../Molecules/MoleculesMenu/MoleculesMenuList";

import { DataMusicHallMenu } from "@/data/menu/music-hall-menu";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function OrganismMenu() {
  const moleculesUlRef = useRef<HTMLUListElement | null>(null);
  const moleculesMenuListContentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!moleculesUlRef.current || !moleculesMenuListContentRef.current) return;

    const ul = moleculesUlRef.current;
    const listContent = moleculesMenuListContentRef.current;

    console.log(ul.offsetHeight);

    console.log(listContent);

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        defaults: { scrollTrigger: { start: "top center", scrub: 1.1 } }
      });

      masterTl.from(ul.children, { scale: 0.1, opacity: 0, duration: 2, stagger: 0.3 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="menu">
      <div className="container">
        <div className="menu_content pt-[190px]">
          <MoleculesMenuHeading
            menuHeading="Մեր Մենյուն"
            menuParagraph="Խնամքով պատրաստված ուտեստներ՝ թարմ և բարձրորակ բաղադրիչներից։"
          />
          <MoleculesMenuList
            moleculesUl={moleculesUlRef}
            moleculesMenuListContent={moleculesMenuListContentRef}
            menuInfo={DataMusicHallMenu}
          />
        </div>
      </div>
    </div>
  );
}
