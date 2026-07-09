import React from "react";
import AtomUl from "../../Atoms/AtomList/AtomUl";
import AtomLi from "../../Atoms/AtomList/AtomLi";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";

import Image from "next/image";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";

export default function MoleculesBanquetCard() {
  const packageCardInfo = [
    {
      priceTitle: "12,000",
      items: [
        { imageSrc: "/images/icons/cold-snacks.svg", heading: "Սառը նախուտեստներ" },
        { imageSrc: "/images/icons/salad.svg", heading: "Աղցաններ" },
        { imageSrc: "/images/icons/hot-food.svg", heading: "Տաք ուտեստներ" },
        { imageSrc: "/images/icons/bottle.svg", heading: "Զովացուցիչ ըմպելիքներ" },
        { imageSrc: "/images/icons/wine.svg", heading: "Ոգելից խմիչքներ" }
      ]
    },
    {
      priceTitle: "14,000",
      items: [
        { imageSrc: "/images/icons/cold-snacks.svg", heading: "Սառը նախուտեստների միքս" },
        { imageSrc: "/images/icons/salad.svg", heading: "Աղցաններ" },
        { imageSrc: "/images/icons/hot-food.svg", heading: "Տաք ուտեստներ" },
        { imageSrc: "/images/icons/bottle.svg", heading: "Զովացուցիչ ըմպելիքներ" },
        { imageSrc: "/images/icons/wine.svg", heading: "Ոգելից խմիչքներ" }
      ]
    }
  ];
  return (
    <>
      <div className=" rounded-t-2xl overflow-hidden flex max-[689px]:flex-col">
        {packageCardInfo.map((cat, catIndex) => (
          <AtomUl key={catIndex} className="w-full bg-[#F4ECE3]">
            <AtomHeading level="h2" className="montserrat-l block text-center bg-[#122E27] text-white text-[34px]">
              {cat.priceTitle}
              {" / "} <span className="inline-block text-[16px]">Անձի համար</span>
            </AtomHeading>
            {cat.items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <AtomLi className="flex items-center px-[20px] border-b py-[10px]">
                  <Image src={item.imageSrc} width={40} height={20} alt="aaa" className="mr-[10%]" />
                  <AtomHeading level="h3">{item.heading}</AtomHeading>
                </AtomLi>
              </React.Fragment>
            ))}
          </AtomUl>
        ))}
      </div>
      <div className="link_box flex justify-center bg-[#132D26] rounded-b-2xl">
        <AtomLinks
          value="NextLink"
          href="/banquet"
          className="bg-[#132D26] uppercase text-[#E5AF5A] py-[20px] px-[30%] whitespace-nowrap"
        >
          Իմանալ ավելին
        </AtomLinks>
      </div>
    </>
  );
}
