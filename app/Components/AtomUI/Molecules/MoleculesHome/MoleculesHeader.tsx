"use client";

import React, { useState } from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import Image from "next/image";

export default function MoleculesHeader() {
  const restAndCafeImgURL = ["/images/icons/menu-icon.svg", "/images/icons/cafe-menu.svg"];
  return (
    <div className="header_and_paragraph">
      <AtomHeading
        level="h1"
        className=" tracking-widest text-center uppercase text-[#07261C] text-[150px] montserrat-b max-[724px]:text-[100px] max-[490px]:text-[70px] max-[338px]:text-[50px]"
      >
        Legend
      </AtomHeading>
      <span className="block w-full h-[1px] bg-[#B08D57] mx-auto my-4"></span>
      <div className="paragraphBox text-center flex justify-center">
        <AtomParagraph className="montserrat-m w-[320px]">
          Մի վայր, որտեղ համը դառնում է լեգենդ։ Բացահայտեք նրբաճաշակ խոհանոցն ու վայելեք էլեգանտ մթնոլորտը{" "}
        </AtomParagraph>
      </div>
      <div className="link_box flex flex-col gap-3 justify-center items-center pt-[33px]">
        {["Music Hall մենյու", "Legend cafe մենյու"].map((el, elIndex) => (
          <AtomLinks
            key={elIndex}
            value="NextLink"
            href={`${elIndex === 0 ? "/menu" : "/legend-cafe-menu"}`}
            className="montserrat-m w-[50%] flex justify-center gap-1 z-50 px-[33px] py-[16px] rounded-2xl border-1 border-[#CA9E57] bg-[#0D2C22] text-amber-50 uppercase cursor-pointer hover:text-[#0D2C22] hover:bg-amber-50 transition-colors duration-100 max-[724px]:w-full"
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
