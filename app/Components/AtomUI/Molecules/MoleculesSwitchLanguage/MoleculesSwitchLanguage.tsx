
import React, { Children } from "react";
import Image from "next/image";

interface MoleculesSwitchLanguageProp {
  onChangeLanguage: (language: "am" | "en" | "ru") => void;
}
export default function MoleculesSwitchLanguage({ onChangeLanguage }: MoleculesSwitchLanguageProp) {
  return (
    <div className="group fixed right-[90px] bottom-[60px] z-[10000] flex flex-col-reverse gap-2">
      <Image
        src={"/images/icons/language.svg"}
        alt="Language icon"
        width={32}
        height={32}
        className="relative z-10 cursor-pointer "
      />

      <button
        onClick={() => onChangeLanguage("am")}
        className=" text-[18px] uppercase text-[#0c2c23] opacity-0 cursor-pointer translate-y-10 pointer-events-none
      transition-all duration-300
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto"
      >
        am
      </button>

      <button
        onClick={() => onChangeLanguage("en")}
        className="text-[18px] uppercase text-[#0c2c23]
      opacity-0 cursor-pointer translate-y-10 pointer-events-none
      transition-all duration-300
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto
    "
      >
        en
      </button>

      <button
        onClick={() => onChangeLanguage("ru")}
        className="text-[18px] uppercase text-[#0c2c23]
      opacity-0 text-[18px] cursor-pointer translate-y-10 pointer-events-none
      transition-all duration-300
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto
    "
      >
        ru
      </button>
    </div>
  );
}
