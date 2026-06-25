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
      <AtomParagraph className="montserrat-m uppercase text-[#87591A] flex justify-center tracking-[40px] text-[30px] max-[724px]:tracking-[10px] text-[20px] max-[490px]:text-[15px] max-[338]: text-[10px]">
        Restaurant
      </AtomParagraph>
      <div className="w-full h-[1px] bg-[#B08D57] mx-auto my-4"></div>
      <div className="paragraphBox text-center flex justify-center">
        <AtomParagraph className="montserrat-m w-[320px]">
          Մի վայր, որտեղ համը դառնում է լեգենդ։ Բացահայտեք նրբաճաշակ խոհանոցն ու վայելեք էլեգանտ մթնոլորտը{" "}
        </AtomParagraph>
      </div>
      <div className="link_box flex flex-col gap-3 justify-center items-center pt-[33px]">
        {/* <button
          onClick={popUpActive}
          className="montserrat-l flex gap-1 z-50 px-[33px] py-[16px] rounded-2xl border-1 border-[#CA9E57] bg-[#0D2C22] text-amber-50 uppercase cursor-pointer"
        >
          {
            <Image
              src={"/images/icons/menu-icon.svg"}
              alt="menu"
              width={20}
              height={20}
              className="pointer-events-none inline-block mr-[5px]"
            />
          }
          Դիտել Մենյուն
        </button> */}

        {["Դիտել ռեստորանի մենյուն", "Դիտել սրճարանի մենյուն"].map((el, elIndex) => (
          <AtomLinks
            key={elIndex}
            value="NextLink"
            href={`${el === "Դիտել ռեստորանի մենյուն" ? "/menu" : "/legend-cafe-menu"}`}
            className="montserrat-l w-[50%] flex justify-center gap-1 z-50 px-[33px] py-[16px] rounded-2xl border-1 border-[#CA9E57] bg-[#0D2C22] text-amber-50 uppercase cursor-pointer hover:text-[#0D2C22] hover:bg-amber-50 transition-colors duration-100 max-[724px]:w-full"
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

      {/* {active && (
        <div
          onClick={() => popUpActive()}
          className="background flex justify-center items-center bg-[#00000072] fixed inset-0 w-full h-screen"
        >
          <div className="poUp flex w-[500px] h-[200px] bg-[#e8d8d0] rounded-4xl min-[508px]:justify-evenly items-center max-[508px]:flex-col justify-center">
            {["Restaurant Menu", "Cafe Menu"].map((el, elIndex) => (
              <AtomLinks
                key={elIndex}
                value="NextLink"
                href={`/${el === "Restaurant Menu" ? "menu" : el === "Cafe Menu" ? "cafe-menu" : null}`}
                className="py-[5%] px-[10%] uppercase border-1 rounded-2xl max-[508px]:w-[50%] text-center my-[10px] "
              >
                {el}
              </AtomLinks>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}
