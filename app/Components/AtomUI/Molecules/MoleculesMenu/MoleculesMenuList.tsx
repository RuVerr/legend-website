"use client";
import React, { RefObject } from "react";
import AtomUl from "../../Atoms/AtomList/AtomUl";
import AtomLi from "../../Atoms/AtomList/AtomLi";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";

interface MenuItem {
  itemName: string;
  rusItem?: string;
  engItem?: string;
  price?: string;
}

interface MenuCategory {
  mainTitle: string;
  items: MenuItem[];
}

interface MoleculesMenuListProps {
  menuInfo: MenuCategory[];
  moleculesUl?: RefObject<HTMLUListElement | null>;
  moleculesMenuListContent?: RefObject<HTMLDivElement | null>;
}

export default function MoleculesMenuList({ menuInfo, moleculesUl, moleculesMenuListContent }: MoleculesMenuListProps) {
  return (
    <AtomUl
      atomUlRef={moleculesUl}
      className="flex flex-col gap-5 items-center pt-[40px] bg-black-20 backdrop-blur-[5px] rounded-3xl pb-[100px]"
    >
      {menuInfo.map((category, catIndex) => (
        // <div key={catIndex} className="menu_list_content w-[80%]">

        <React.Fragment key={catIndex}>
          <AtomHeading
            level="h3"
            className="montserrat-m w-[80%] text-[#5a421f] text-[26px] py-[10px] my-[20px] uppercase text-center"
          >
            {category.mainTitle}
          </AtomHeading>
          {category.items.map((item, itemIndex) => (
            <div
              ref={moleculesMenuListContent}
              key={itemIndex}
              className="flex items-center justify-between gap-14 w-full border-y-1 border-[#6f5229] py-[10px]"
            >
              <AtomLi key={itemIndex} className="montserrat-b text-[#6f5229] pl-[10px] text-[20px]">
                {item.itemName}
                {item.engItem && item.rusItem && (
                  <>
                    <span className="montserrat-b block text-[#6f5229] py-[10px]">{item?.rusItem}</span>
                    <span className="montserrat-b block text-[#6f5229]">{item?.engItem}</span>
                  </>
                )}
              </AtomLi>
              <span className="montserrat-b pl-[10px] text-[20px] text-[#6f5229] whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </AtomUl>
  );
}
