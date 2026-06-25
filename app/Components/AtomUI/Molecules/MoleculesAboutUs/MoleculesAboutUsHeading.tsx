import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";

export default function MoleculesAboutUsHeading() {
  return (
    <div className="about_us_header_and_paragraph w-full text-center flex flex-col items-center">
      <div className="about_us_header_and_paragraph_box w-[70%]">
        <AtomHeading level="h2" className="text-[42px] text-[#5a421f]">
          Մեր մասին
        </AtomHeading>
        <span className="block border-b-1 border-[#b08d57] my-[20px]"></span>
        <AtomParagraph className="text-[#5a421f]">
          Legend-ը մի վայր է, որտեղ համադրվում են նրբաճաշակ խոհանոցը, բարձրակարգ սպասարկումն ու ջերմ մթնոլորտը։ Մենք
          ստեղծում ենք յուրահատուկ փորձառություն՝ օգտագործելով միայն թարմ և բարձրորակ բաղադրիչներ, որպեսզի յուրաքանչյուր
          այցելություն դառնա հիշարժան։
        </AtomParagraph>
        <AtomParagraph className="pt-[20px] text-[#5a421f]">
          Մեր նպատակն է հյուրերին մատուցել ոչ միայն համեղ ուտեստներ, այլև անմոռանալի պահեր, որտեղ յուրաքանչյուր մանրուք
          ստեղծված է հաճույք պարգևելու համար։
        </AtomParagraph>
      </div>
    </div>
  );
}
