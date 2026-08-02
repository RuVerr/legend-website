"use client";
import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import { useLanguage } from "@/app/context/useLanguage";

export default function MoleculesAboutUsHeading() {
  const { t } = useLanguage();
  const aboutUsHeading = t.aboutSection.heading
  const aboutUsParagraphOne = t.aboutSection.paragraphOne
  const aboutUsParagraphTwo = t.aboutSection.paragraphTwo;
  return (
    <div className="about_us_header_and_paragraph w-full text-center flex flex-col items-center">
      <div className="about_us_header_and_paragraph_box w-[70%]">
        <AtomHeading level="h2" className="text-[42px] text-[#5a421f]">
          {aboutUsHeading}
        </AtomHeading>
        <span className="block border-b-1 border-[#b08d57] my-[20px]"></span>
        <AtomParagraph className="text-[#5a421f]">{aboutUsParagraphOne}</AtomParagraph>
        <AtomParagraph className="pt-[20px] text-[#5a421f]">{aboutUsParagraphTwo}</AtomParagraph>
      </div>
    </div>
  );
}
