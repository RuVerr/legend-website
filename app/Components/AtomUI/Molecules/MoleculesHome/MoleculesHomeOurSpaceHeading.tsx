"use client";

import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import { useLanguage } from "@/app/context/useLanguage";

export default function MoleculesHomeOurSpace() {
  const { t } = useLanguage();
  const ourSpaceTitle = t.ourSpaceSection.ourSpaceTitle;
  const ourSpaceSubTitle = t.ourSpaceSection.ourSpaceSubTitle;
  const ourSpaceParagraph = t.ourSpaceSection.ourSpaceParagraph;

  return (
    <div className="flex justify-center text-center pt-[70px] pb-[50px]">
      <div className="w-[70%]">
        <AtomHeading level="h2" className="montserrat-m text-[24px] text-[#946326] uppercase max-[546px]:text-[18px]">
          {ourSpaceTitle}
        </AtomHeading>
        <span className=" scale-[0.9] block border-t border-[#946326] my-[10px]" />

        <AtomHeading
          level="h3"
          className=" montserrat-b text-[56px] tracking-[6px] uppercase max-[788px]:text-[46px] max-[666px]:text-[36px] tracking-[2px] "
        >
          {ourSpaceSubTitle}
        </AtomHeading>
        <span className=" block border-t border-[#946326] my-[10px]" />
        <AtomParagraph className="montserrat-l max-[377px]:text-[14px]">{ourSpaceParagraph}</AtomParagraph>
      </div>
    </div>
  );
}
