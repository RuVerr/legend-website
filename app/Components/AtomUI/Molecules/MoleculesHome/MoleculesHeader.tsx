"use client";

import React, { RefObject } from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import Image from "next/image";

interface MoleculesHeaderProp {
  moleculesHeading: RefObject<HTMLHeadingElement | null>;
  moleculesLine: RefObject<HTMLSpanElement | null>;
  moleculesParagraph: RefObject<HTMLParagraphElement | null>;
  moleculesLinks: RefObject<HTMLDivElement | null>;
}

export default function MoleculesHeader({
  moleculesHeading,
  moleculesLine,
  moleculesParagraph,
  moleculesLinks
}: MoleculesHeaderProp) {
  const restAndCafeImgURL = ["/images/icons/menu-icon.svg", "/images/icons/cafe-menu.svg"];
  const headingTitle = "Legend";
  const paragraph = "Մի վայր, որտեղ համը դառնում է լեգենդ։ Բացահայտեք նրբաճաշակ խոհանոցն ու վայելեք էլեգանտ մթնոլորտը";

  return (
    <div className="header_and_paragraph">
      <AtomHeading
        atomHeadingRef={moleculesHeading}
        level="h1"
        className=" tracking-widest text-center uppercase text-[#07261C] text-[150px] montserrat-b max-[756px]:text-[100px] max-[517px]:text-[70px] max-[374px]:text-[50px]"
      >
        {headingTitle.split("").map((letter, letterIndex) => (
          <span key={letterIndex} className="inline-block">
            {letter}
          </span>
        ))}
      </AtomHeading>
      <span ref={moleculesLine} className="block w-full h-[1px] bg-[#B08D57] mx-auto my-4"></span>
      <div className="paragraphBox text-center flex justify-center">
        <AtomParagraph paragraphRef={moleculesParagraph} className="montserrat-m w-[320px]">
          {paragraph.split(" ").map((word) => (
            <span key={word} className="inline-block mr-[3px]">
              {word}
            </span>
          ))}
        </AtomParagraph>
      </div>
      <div ref={moleculesLinks} className="link_box flex flex-col gap-3 justify-center items-center pt-[33px]">
        {["Music Hall մենյու", "Legend cafe մենյու"].map((el, elIndex) => (
          <AtomLinks
            key={elIndex}
            value="NextLink"
            href={`${elIndex === 0 ? "/menu" : "/legend-cafe-menu"}`}
            className="montserrat-m w-[50%] whitespace-nowrap flex justify-center gap-1 z-50 px-[33px] py-[16px] rounded-2xl border-1 border-[#CA9E57] bg-[#0D2C22] text-amber-50 uppercase cursor-pointer hover:text-[#0D2C22] hover:bg-amber-50 transition-colors duration-100 max-[724px]:w-full"
          >
            {
              <Image
                src={restAndCafeImgURL[elIndex]}
                alt="menu"
                width={30}
                height={30}
                className="pointer-events-none inline-block mr-[5px]"
              />
            }
            {el}
          </AtomLinks>
        ))}
      </div>
    </div>
  );
}
