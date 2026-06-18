import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import Image from "next/image";

export default function MoleculesHeader() {
  return (
    <div className="header_and_paragraph">
      <AtomHeading
        level="h1"
        className=" tracking-widest text-center uppercase text-[#07261C] text-[150px] montserrat-b max-[724px]:text-[100px] max-[490px]:text-[70px] max-[338px]:text-[50px]"
      >
        Legend
      </AtomHeading>
      <AtomParagraph className=" montserrat-m uppercase text-[#87591A] flex justify-center tracking-[40px] text-[30px] max-[724px]:tracking-[10px] text-[20px] max-[490px]:text-[15px] max-[338]: text-[10px]">
        Restaurant
      </AtomParagraph>
      <div className="w-full h-[1px] bg-[#B08D57] mx-auto my-4"></div>
      <div className="paragraphBox text-center flex justify-center">
        <AtomParagraph className="montserrat-m w-[320px]">
          Մի վայր, որտեղ համը դառնում է լեգենդ։ Բացահայտեք նրբաճաշակ խոհանոցն ու վայելեք էլեգանտ մթնոլորտը{" "}
        </AtomParagraph>
      </div>
      <div className="link_box flex justify-center pt-[33px]">
        <AtomLinks
          value="NextLink"
          href="/menu"
          className="montserrat-l flex gap-1 px-[33px] py-[16px] rounded-2xl border-1 border-[#CA9E57] bg-[#0D2C22] text-amber-50 uppercase"
        >
          {
            <Image
              src={"/images/icons/menu-icon.svg"}
              alt="menu"
              width={20}
              height={20}
              className="inline-block mr-[5px]"
            />
          }
          Դիտել Մենյուն
        </AtomLinks>
      </div>
    </div>
  );
}
