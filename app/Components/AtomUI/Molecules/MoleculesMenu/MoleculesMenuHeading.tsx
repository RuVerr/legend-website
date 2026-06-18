import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";

export default function MoleculesMenuHeading() {
  return (
    <div className="menu_heading flex justify-center text-center">
      <div className="menu_heading_box w-[400px]">
        <AtomHeading level="h2" className="uppercase text-[#5a421f] montserrat-m text-[32px]">
          Մեր Մենյուն
        </AtomHeading>
        <span className="line block my-[10px] w-full border-b-1 border-[#b08d57]"></span>
        <div className="paragraph_box flex justify-center">
          <AtomParagraph className="montserrat-m text-[#5a421f] text-[18px]">
            Խնամքով պատրաստված ուտեստներ՝ թարմ և բարձրորակ բաղադրիչներից։{" "}
          </AtomParagraph>
        </div>
      </div>
    </div>
  );
}
