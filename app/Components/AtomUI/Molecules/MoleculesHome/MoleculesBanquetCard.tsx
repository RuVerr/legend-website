"use client";
import React from "react";
import AtomUl from "../../Atoms/AtomList/AtomUl";
import AtomLi from "../../Atoms/AtomList/AtomLi";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";

import Image from "next/image";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import { useLanguage } from "@/app/context/useLanguage";

export default function MoleculesBanquetCard() {
  const { t } = useLanguage();
  const firstPackageUrl = t.packagesSection.firstPackage;
  const secondPackageUrl = t.packagesSection.secondPackage;
  const buttonViewMore = t.packagesSection.button;
  const packageCardInfo = [
    {
      priceTitle: firstPackageUrl.price,
      items: [
        { imageSrc: "/images/icons/cold-snacks.svg", heading: firstPackageUrl.coldAppetizers },
        { imageSrc: "/images/icons/salad.svg", heading: firstPackageUrl.salads },
        { imageSrc: "/images/icons/hot-food.svg", heading: firstPackageUrl.hotDishes },
        { imageSrc: "/images/icons/bottle.svg", heading: firstPackageUrl.softDrinks },
        { imageSrc: "/images/icons/wine.svg", heading: firstPackageUrl.alcoholicDrinks }
      ]
    },
    {
      priceTitle: secondPackageUrl.price,
      items: [
        { imageSrc: "/images/icons/cold-snacks.svg", heading: secondPackageUrl.coldAppetizerMix },
        { imageSrc: "/images/icons/salad.svg", heading: secondPackageUrl.salads },
        { imageSrc: "/images/icons/hot-food.svg", heading: secondPackageUrl.hotDishes },
        { imageSrc: "/images/icons/bottle.svg", heading: secondPackageUrl.softDrinks },
        { imageSrc: "/images/icons/wine.svg", heading: secondPackageUrl.alcoholicDrinks }
      ]
    }
  ];

  return (
    <>
      <div className=" rounded-t-2xl overflow-hidden flex max-[689px]:flex-col">
        {packageCardInfo.map((cat, catIndex) => (
          <AtomUl key={catIndex} className="w-full bg-[#F4ECE3]">
            <AtomHeading level="h2" className="montserrat-l block text-center bg-[#122E27] text-white text-[34px]">
              {cat.priceTitle.split("/").splice(0, 1)}
              {" / "} <span className="inline-block text-[16px]">{cat.priceTitle.split("/").splice(1, 2)}</span>
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
          {buttonViewMore}
        </AtomLinks>
      </div>
    </>
  );
}
