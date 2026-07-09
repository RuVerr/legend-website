import React from "react";
import MoleculesNavigation from "../../Molecules/MoleculesNavigation/MoleculesNavigation";

export default function OrganismMobileNavigation() {
  return (
    <>
      <div className="mobile_navigation_content relative min-[620px]:hidden">
        <div className="fixed inset-0 h-[100dvh] w-full bg-[#0c2c237e] backdrop-blur-[3px]"></div>
        <div className="burger_menu absolute top-[50px] right-[10px] z-[10000] w-[50px] h-[30px] flex flex-col justify-between">
          {[1, 2, 3].map((line, lineIndex) => (
            <span key={lineIndex} className="line_burger block border-t-3 border-[#0c2c23] rounded-2xl"></span>
          ))}
        </div>
        <MoleculesNavigation className=" fixed right-0 top-0 flex flex-col pt-[120px] px-[40px] h-[100dvh] bg-[#d8cec51e] rounded-l-2xl drop-shadow-2xl backdrop-blur-2xl" />
      </div>
    </>
  );
}
