import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";

export default function MoleculesBanquetHeader() {
  return (
    <>
      <div className="flex justify-center text-center pt-[70px] pb-[50px]">
        <div className="w-[70%]">
          <span className=" scale-[0.9] block border-t border-[#946326] my-[10px]" />

          <AtomHeading
            level="h3"
            className=" montserrat-b text-[56px] tracking-[6px] uppercase max-[788px]:text-[46px] max-[666px]:text-[36px] tracking-[2px] "
          >
            Փաթեթներ
          </AtomHeading>
          <span className=" block border-t border-[#946326] my-[10px]" />
        </div>
      </div>
    </>
  );
}
