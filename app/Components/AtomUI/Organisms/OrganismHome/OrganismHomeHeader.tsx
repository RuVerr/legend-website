"use client";

import React, { useLayoutEffect, useRef } from "react";
import MoleculesHeader from "../../Molecules/MoleculesHome/MoleculesHeader";
import MoleculesContacts from "../../Molecules/MoleculesHome/MoleculesContacts";
import MoleculesBackground from "../../Molecules/MoleculesBackground/MoleculesBackground";
import gsap from "gsap";

export default function OrganismHome() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const moleculesContactsRef = useRef<HTMLDivElement | null>(null);
  const moleculesSocRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      !headingRef.current ||
      !lineRef.current ||
      !paragraphRef.current ||
      !linksRef.current ||
      !moleculesContactsRef.current ||
      !moleculesSocRef.current
    )
      return;

    const headingEl = headingRef.current;
    const line = lineRef.current;
    const paragraph = paragraphRef.current;
    const links = linksRef.current;
    const contacts = moleculesContactsRef.current;
    const social = moleculesSocRef.current;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({ defaults: { ease: "expo.inOut" } });
      masterTl
        .from(headingEl.children, {
          y: () => gsap.utils.random(-400, 400),
          duration: 0.5,
          opacity: 0,
          stagger: { each: 0.1, from: "edges" },
          ease: "power4.inOut"
        })
        .from(line, { scaleX: 0, transformOrigin: "center", duration: 1 }, "<")
        .from(
          paragraph.children,
          {
            x: 100,
            duration: 1,
            opacity: 0,
            ease: "power4.out",
            stagger: 0.2
          },
          ">"
        )
        .from(links.children, { scale: 0.01, duration: 1, opacity: 0, stagger: 0.1 }, "<")
        .from(contacts.children, { x: 100, scale: 0.1, duration: 1, opacity: 0, stagger: 0.2 }, "<")
        .from(social.children, { scale: 5, duration: 1, opacity: 0, stagger: 0.2 }, ">");
    });

    return () => ctx.revert();
  });

  return (
    <>
      <MoleculesBackground />
      <div className="header_content flex-1 py-[20px] flex min-[1156px]:justify-center items-center gap-[10px] max-[1156px]:flex-col">
        <div className="reserve w-[200px]" />

        <MoleculesHeader
          moleculesHeading={headingRef}
          moleculesLine={lineRef}
          moleculesParagraph={paragraphRef}
          moleculesLinks={linksRef}
        />

        <MoleculesContacts
          moleculesContacts={moleculesContactsRef}
          moleculesSoc={moleculesSocRef}
          contactsContentClassName="flex w-[200px] flex-col gap-5 min-[1156px]:flex-col"
        />
      </div>
    </>
  );
}
