import React, { Children } from "react";
import Image from "next/image";

interface MoleculesSwitchLanguageProp {
  onChangeLanguage: (language: "am" | "en" | "ru") => void;
}
export default function MoleculesSwitchLanguage({ onChangeLanguage }: MoleculesSwitchLanguageProp) {
  return (
    <div className="group fixed right-[10px] bottom-[50px] z-[10000] flex gap-2 bg-[#0c2c23] px-[10px] py-[5px] rounded-2xl">
      <button onClick={() => onChangeLanguage("am")} className=" text-[18px] uppercase text-white cursor-pointer">
        am
      </button>

      <button onClick={() => onChangeLanguage("en")} className="text-[18px] uppercase text-white cursor-pointer">
        en
      </button>

      <button
        onClick={() => onChangeLanguage("ru")}
        className="text-[18px] uppercase text-white text-[18px] cursor-pointer"
      >
        ru
      </button>
    </div>
  );
}
